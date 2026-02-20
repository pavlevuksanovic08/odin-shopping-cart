import { describe, it, except, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer component", () => {
    it("renders footer correctly", () => {
        render(<Footer />)

        let logo = screen.getByRole("img", {alt: /logo/i})
        let copyRight = screen.getByTestId("copyRight")

        expect(logo).toBeInTheDocument();
        expect(copyRight).toBeInTheDocument();
    })
})