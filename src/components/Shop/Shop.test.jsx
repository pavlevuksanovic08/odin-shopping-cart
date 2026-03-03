import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { useOutletContext } from "react-router-dom";

// Mock useLoaderData from react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useLoaderData: () => [
      { id: 1, title: "Test Product", price: 10, image: "test.jpg" }
    ],
    useOutletContext: () => ({
      cartItems: [
        { item: { id: 1, title: "Test Product", price: 10, image: "test.jpg" }, quantity: 2 }
      ],
    })
  }
})

describe("Shop Component", () => {
  it("renders shop heading and product cards", () => {
    render(<Shop />);
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
  });
});