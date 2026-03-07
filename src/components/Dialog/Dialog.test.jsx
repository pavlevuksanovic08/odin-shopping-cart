import { describe, it, expect, beforeEach, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Dialog from "./Dialog";
import { MemoryRouter, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

vi.mock("../Cart/CartCard/CartCard.jsx", () => ({
    default: () => <div data-testid="cart-card">CardCard</div>
}))

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom")
    return {
        ...actual,
        useOutletContext: vi.fn(),
        useNavigate: () => mockNavigate
}})

const mockSetShow = vi.fn();
const mockShow = true;
const mockCart = {
        totalPrice: () => vi.fn(() => 100)
    }

describe("Dialog component", () => {
    
    beforeEach(() => {
        vi.clearAllMocks();
        HTMLDialogElement.prototype.showModal = vi.fn(function() {
            this.setAttribute("open", "")
        });

        HTMLDialogElement.prototype.close = vi.fn(function() {
            this.removeAttribute("open");
        })
    })

    it("component renders correctly", () => {
        render(
            <MemoryRouter>
                <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
            </MemoryRouter>
        )


        expect(screen.getByRole("dialog")).toBeInTheDocument()
        const msg = screen.getByText(/added to your cart/)
        const total = screen.getByTestId("pricing");
        const cartBtn = screen.getByRole("button", {name: /view cart/i})
        const checkoutBtn = screen.getByRole("button", {name: /checkout/i})
        const continueBtn = screen.getByRole("button", {name: /continue shopping/i})


        expect(msg).toBeInTheDocument()
        expect(total).toBeInTheDocument()
        expect(cartBtn).toBeInTheDocument()
        expect(checkoutBtn).toBeInTheDocument()
        expect(continueBtn).toBeInTheDocument()
    })

    it("redirect to cart", async () => {
        render( <MemoryRouter>
            <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
        </MemoryRouter>)

        const user = userEvent.setup();
        const cartBtn = screen.getByRole("button", {name: /view cart/i})

        await user.click(cartBtn);

        expect(mockNavigate).toBeCalledWith("/cart")
    })

    it("closes dialog correctly", async () => {
        render( <MemoryRouter>
            <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
        </MemoryRouter>)

        const user = userEvent.setup();
        const continueBtn = screen.getByRole("button", {name: /continue shopping/i})
        
        await user.click(continueBtn);

        expect(mockSetShow).toHaveBeenCalledWith(false)
    })
})