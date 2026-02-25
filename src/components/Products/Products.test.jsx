import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Products from "./Products";

describe("Products component", () => {
  it("renders the Products component correctly", () => {
    render(<Products />);
    const productsSection = screen.getByTestId("products-section");
    const heading = screen.getByRole("heading", {name: "BEST GIFTS"});
    const products = screen.getByTestId("products");

    expect(productsSection).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(products).toBeInTheDocument();
  });
});