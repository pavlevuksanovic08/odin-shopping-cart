import { describe, it, expect, beforeEach, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Dialog from "./Dialog";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// 1. Globalni mock za Dialog metode (pre svega ostalog)
HTMLDialogElement.prototype.showModal = vi.fn(function() { this.setAttribute("open", "") });
HTMLDialogElement.prototype.close = vi.fn(function() { this.removeAttribute("open") });

// 2. Mock komponente koja nije bitna za ovaj test
vi.mock("../Cart/CartCard/CartCard.jsx", () => ({
    default: () => <div data-testid="cart-card">CartCard</div>
}))

// 3. Mock za navigaciju
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom")
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        // Ako Dialog vuče context direktno, dodaj ga i ovde za svaki slučaj
        useOutletContext: () => ({ setShow: vi.fn() }) 
    }
})

describe("Dialog component", () => {
    const mockSetShow = vi.fn();
    const mockCart = {
        totalPrice: vi.fn(() => 100) // ISPRAVLJENO
    };

    beforeEach(() => {
        vi.clearAllMocks();
    })

    it("component renders correctly", () => {
        render(
            <MemoryRouter>
                <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
            </MemoryRouter>
        )

        expect(screen.getByRole("dialog")).toBeInTheDocument()
        expect(screen.getByText(/added to your cart/i)).toBeInTheDocument()
        
        // Proveri cenu - pošto totalPrice() vraća 100, tražiš 100
        expect(screen.getByText(/\$100/)).toBeInTheDocument()
    })

    it("redirect to cart", async () => {
        const user = userEvent.setup();
        render( 
            <MemoryRouter>
                <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
            </MemoryRouter>
        )

        const cartBtn = screen.getByRole("button", {name: /view cart/i})
        await user.click(cartBtn);

        expect(mockNavigate).toHaveBeenCalledWith("/cart")
    })

    it("closes dialog correctly", async () => {
        const user = userEvent.setup();
        render( 
            <MemoryRouter>
                <Dialog cart={mockCart} show={true} setShow={mockSetShow} />
            </MemoryRouter>
        )

        const continueBtn = screen.getByRole("button", {name: /continue shopping/i})
        await user.click(continueBtn);

        expect(mockSetShow).toHaveBeenCalledWith(false)
    })
})