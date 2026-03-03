import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Products from "./Products";

describe("Products component", () => {

  const testProducts = [
    {id: 1, title: "Some title", price: 20},
    {id: 2, title: "Some title", price: 20}
  ]

  const testCart = [
    {item: {id: 1, title: "Some title", price: 20}, quantity: 2}
  ]

  it("renders the Products component correctly", () => {
    render(<Products products={testProducts} cart={testCart}/>);
    const productsSection = screen.getByTestId("products-section");
    const heading = screen.getByRole("heading", {name: "BEST GIFTS"});
    const products = screen.getByTestId("products");

    expect(productsSection).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(products).toBeInTheDocument();
  });
});