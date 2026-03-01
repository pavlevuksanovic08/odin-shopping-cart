import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import QuantitySelector from "./QuantitySelector"

describe("QuantitySelector", () => {

    it("renders with initial value", () => {
        render(<QuantitySelector value={5} />)

        const input = screen.getByRole("spinbutton")
        expect(input).toHaveValue(5)
    })

    it("increases quantity when + is clicked", async () => {
        render(<QuantitySelector value={5} />)

        const user = userEvent.setup()
        const plusButton = screen.getByText("+")
        const input = screen.getByRole("spinbutton")

        await user.click(plusButton)

        expect(input).toHaveValue(6)
    })

    it("decreases quantity when - is clicked", async () => {
        render(<QuantitySelector value={5} />)

        const user = userEvent.setup()
        const minusButton = screen.getByText("-")
        const input = screen.getByRole("spinbutton")

        await user.click(minusButton)

        expect(input).toHaveValue(4)
    })

    it("does not decrease below 1", async () => {
        render(<QuantitySelector value={1} />)

        const user = userEvent.setup()
        const minusButton = screen.getByText("-")
        const input = screen.getByRole("spinbutton")

        await user.click(minusButton)

        expect(input).toHaveValue(1)
    })

    it("does not increase above 99", async () => {
        render(<QuantitySelector value={99} />)

        const user = userEvent.setup()
        const plusButton = screen.getByText("+")
        const input = screen.getByRole("spinbutton")

        await user.click(plusButton)

        expect(input).toHaveValue(99)
    })

    it("updates value when typing valid number", async () => {
        render(<QuantitySelector value={5} />)

        const user = userEvent.setup()
        const input = screen.getByRole("spinbutton")

        await user.clear(input)
        await user.type(input, "10")

        expect(input).toHaveValue(10)
    })

    it("does not update when typing 0 or negative number", async () => {
        render(<QuantitySelector value={5} />)

        const user = userEvent.setup()
        const input = screen.getByRole("spinbutton")

        await user.clear(input)
        await user.type(input, "0")

        expect(input).toHaveValue(1)
    })

})