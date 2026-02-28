import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import CartCard from "./CartCard";

describe("CartCard component", () => {
    const testItem = {
        item: {
            id: 1,
            title: "Test Item",
            image: "test.jpg",
            price: 100
        },
        quantity: 10
    }
    it("CartCard renders correctly", () => {
        render(<CartCard product={testItem} />)

        const image = screen.getByAltText("Test Item")
        const title = screen.getByText("Test Item")
        const price = screen.getByText("$100")
        const quantity = screen.getByTestId("quantityInput");

        expect(image).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(quantity).toBeInTheDocument();
    })

    it("input quantity works correctly", () => {

    })
})