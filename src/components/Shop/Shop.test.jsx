import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";

// Mock useLoaderData from react-router-dom
vi.mock("react-router-dom", () => ({
  useLoaderData: () => [
    { id: 1, title: "Test Product", price: 10, image: "test.jpg" }
  ]
}));

describe("Shop Component", () => {
  it("renders shop heading and product cards", () => {
    render(<Shop />);
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
  });
});