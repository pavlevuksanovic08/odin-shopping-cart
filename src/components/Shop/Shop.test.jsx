import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { MemoryRouter, useOutletContext } from "react-router-dom";

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
          {
            item: { id: 1, title: "Test Product", price: 10, image: "test.jpg" },
            quantity: 2
          }
        ],
        totalPrice: vi.fn().mockReturnValue(100)
      }
    ),
  }
})

if (typeof HTMLDialogElement !== 'undefined') {
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
}

describe("Shop Component", () => {
  it("renders shop heading and product cards", () => {
    render(<MemoryRouter>
        <Shop />
      </MemoryRouter>);
    expect(screen.getByRole("heading", { name: /shop/i})).toBeInTheDocument();
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
  });
});