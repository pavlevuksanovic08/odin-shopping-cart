import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import ProductCard from "./ProductCard"

// Mock QuantitySelector
vi.mock("../../QuantitySelector/QuantitySelector", () => ({
  default: ({ value, handler }) => (
    <div>
      <button onClick={() => handler(value + 1)}>Increase</button>
      <span data-testid="quantity">{value}</span>
    </div>
  )
}))

describe("ProductCard", () => {

  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 50,
    image: "test.jpg"
  }

  const mockCart = {
    addToCart: vi.fn()
  }

  const mockSetShow = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders product title", () => {
    render(<ProductCard product={mockProduct} cart={mockCart} setShow={mockSetShow} />)

    expect(screen.getByTestId("title")).toHaveTextContent("Test Product")
  })

  it("renders product price", () => {
    render(<ProductCard product={mockProduct} cart={mockCart} setShow={mockSetShow} />)

    expect(screen.getByTestId("price")).toHaveTextContent("$50")
  })

  it("calls addToCart with correct product and default quantity", async () => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} cart={mockCart} setShow={mockSetShow} />)

    await user.click(screen.getByText("ADD TO CART"))

    expect(mockCart.addToCart)
      .toHaveBeenCalledWith(mockProduct, 1)
  })

  it("changes quantity and sends updated quantity", async () => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} cart={mockCart} setShow={mockSetShow}/>)

    await user.click(screen.getByText("Increase"))
    await user.click(screen.getByText("ADD TO CART"))

    expect(mockCart.addToCart)
      .toHaveBeenCalledWith(mockProduct, 2)
  })

  it("resets quantity to 1 after adding to cart", async () => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} cart={mockCart} setShow={mockSetShow}/>)

    await user.click(screen.getByText("Increase"))
    await user.click(screen.getByText("ADD TO CART"))

    expect(screen.getByTestId("quantity"))
      .toHaveTextContent("1")
  })

})