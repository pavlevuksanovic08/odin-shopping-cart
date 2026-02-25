import {describe, expect, it} from "vitest";
import {screen, render, getByTestId} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ProductCard from "./ProductCard"

describe("ProductCard component", () => {
    const mockProduct = {
        id: 1,
        title: "Test Product",
        price: 9.99,
        image: "test.jpg"
    }
    it("ProductCard renders on screen", () => {
        render(<ProductCard product={mockProduct}/>);

        const card = screen.getByTestId("product-card");
        const img = screen.getByRole("img");
        const title = screen.getByTestId("title");
        const price = screen.getByTestId("price");
        const selector = screen.getByTestId("selector");
        const addToCartBtn = screen.getByRole("button", {name: /add to cart/i})

        expect(card).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(selector).toBeInTheDocument();
        expect(addToCartBtn).toBeInTheDocument();
    })

    it("ProductCard testing incrementation", async () => {
        render(<ProductCard product={mockProduct}/>);

        const user = userEvent.setup();
        const increment = screen.getByRole("button", {name: "+"});
        const quantity = screen.getByTestId("quantity");
        
        await user.click(increment);

        console.log(quantity)

        expect(quantity).toHaveTextContent(2);
    })

    it("ProductCard testing decrementation", async () => {
        render(<ProductCard product={mockProduct}/>)

        const user = userEvent.setup()
        const increment = screen.getByRole("button", {name: "+"});
        const decrement = screen.getByRole("button", {name: "-"});
        const quantity = screen.getByTestId("quantity");
        
        await user.click(increment);
        await user.click(increment);
        await user.click(decrement);


        console.log(quantity)

        expect(quantity).toHaveTextContent(2);
    })
})