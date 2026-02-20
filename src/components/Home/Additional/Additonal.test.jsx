import { describe, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import Additional from "./Additional"

describe("Additional component", () => {
    it("Test does additional component renders correctly", () => {
        render(<Additional />)

        let heartHandIcon = screen.getByLabelText(/hand heart icon/i);
        let heartHandText = screen.getByText(/Free 30-day returns/i)
        let truckIcon = screen.getByLabelText(/truck icon/i);
        let truckText = screen.getByText(/Get your gifts in time - Free shipping on orders \$75\+/i)
        let giftIcon = screen.getByLabelText(/gift icon/i);
        let giftText = screen.getByText(/Gift packaging available/i)
        let shieldCheckIcon = screen.getByLabelText(/shield check icon/i);
        let shieldCheckText = screen.getByText(/Complimentary 1-year warranty/i)

        expect(heartHandIcon).toBeInTheDocument();
        expect(heartHandText).toBeInTheDocument();
        expect(truckIcon).toBeInTheDocument();
        expect(truckText).toBeInTheDocument();
        expect(giftIcon).toBeInTheDocument();
        expect(giftText).toBeInTheDocument();
        expect(shieldCheckIcon).toBeInTheDocument();
        expect(shieldCheckText).toBeInTheDocument();
    })
})