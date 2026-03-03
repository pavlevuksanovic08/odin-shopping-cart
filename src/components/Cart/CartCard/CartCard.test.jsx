import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import CartCard from "./CartCard"

// ---- Mock QuantitySelector ----
vi.mock("../../QuantitySelector/QuantitySelector", () => ({
  default: ({ value, handler }) => (
    <div>
      <button onClick={() => handler(value + 1)}>Increase</button>
      <span data-testid="quantity">{value}</span>
    </div>
  )
}))

// ---- Mock lucide-react X icon ----
vi.mock("lucide-react", () => ({
  X: ({ onClick }) => <button onClick={onClick}>X</button>
}))

describe("CartCard component", () => {

  const mockProduct = {
    item: { id: 1, title: "Test Product", price: 50, image: "test.jpg" },
    quantity: 2
  }

  const mockCart = {
    changeQuantity: vi.fn(),
    removeFromCart: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders product title and price", () => {
    render(<CartCard product={mockProduct} cart={mockCart} />)

    expect(screen.getByText("Test Product")).toBeInTheDocument()
    expect(screen.getByText("$50")).toBeInTheDocument()
  })

  it("renders initial quantity from product", () => {
    render(<CartCard product={mockProduct} cart={mockCart} />)

    expect(screen.getByTestId("quantity")).toHaveTextContent("2")
  })

  it("calls changeQuantity when quantity increases", async () => {
    const user = userEvent.setup()
    render(<CartCard product={mockProduct} cart={mockCart} />)

    await user.click(screen.getByText("Increase"))

    expect(mockCart.changeQuantity).toHaveBeenCalledWith(1, 3) // id=1, new quantity=3
    expect(screen.getByTestId("quantity")).toHaveTextContent("3")
  })

  it("calls removeFromCart when X is clicked", async () => {
    const user = userEvent.setup()
    render(<CartCard product={mockProduct} cart={mockCart} />)

    await user.click(screen.getByText("X"))

    expect(mockCart.removeFromCart).toHaveBeenCalledWith(1)
  })

})