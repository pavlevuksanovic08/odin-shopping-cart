import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Products from "./Products";
import { MemoryRouter } from "react-router-dom";

if (typeof HTMLDialogElement !== 'undefined') {
  HTMLDialogElement.prototype.showModal = vi.fn(function() {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function() {
    this.removeAttribute("open");
  });
}

describe("Products component", () => {

  const testProducts = [
    {id: 1, title: "Some title", price: 20},
    {id: 2, title: "Some title", price: 20}
  ]

  const testCart = {
    cartItems: [
      {item: {id: 1, title: "Some title", price: 20}, quantity: 2}
    ],
    totalPrice: vi.fn(() => 20)
  }

  it("renders the Products component correctly", () => {
    render(
    <MemoryRouter>
      <Products products={testProducts} cart={testCart}/>
    </MemoryRouter>);
    const productsSection = screen.getByTestId("products-section");
    const heading = screen.getByRole("heading", {name: "BEST GIFTS"});
    const products = screen.getByTestId("products");

    expect(productsSection).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(products).toBeInTheDocument();
  });
});