import { findByText, render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import Cart from "./Cart"

// ---- Mock CartCard (we don't test it here) ----
vi.mock("./CartCard/CartCard", () => ({
  default: ({ product }) => (
    <div data-testid="cart-card">
      {product.item.title}
    </div>
  )
}))

// ---- Mock react-router useOutletContext ----
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useOutletContext: vi.fn()
  }
})

import { useOutletContext } from "react-router-dom"

describe("Cart component", () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders empty cart state", () => {
    useOutletContext.mockReturnValue({
      cartItems: []
    })

    render(<Cart />)

    expect(screen.getByText(/your cart is/i)).toBeInTheDocument()
    expect(screen.getByText(/empty/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /return to shop/i }))
      .toBeInTheDocument()
  })

  it("renders cart items when not empty", () => {
    useOutletContext.mockReturnValue({
      cartItems: [
        {
          item: { id: 1, title: "Product 1", price: 10 },
          quantity: 2
        },
        {
          item: { id: 2, title: "Product 2", price: 5 },
          quantity: 1
        }
      ]
    })

    render(<Cart />)

    const cards = screen.getAllByTestId("cart-card")
    expect(cards).toHaveLength(2)
  })

  it("calculates and displays total price correctly", async () => {
    useOutletContext.mockReturnValue({
      cartItems: [
        {
          item: { id: 1, title: "Product 1", price: 10 },
          quantity: 2
        },
        {
          item: { id: 2, title: "Product 2", price: 5 },
          quantity: 1
        }
      ]
    })

    render(<Cart />)

    // 10*2 + 5*1 = 25

    const total = screen.getAllByText("$25")

    expect(total).toHaveLength(2)
  })

})