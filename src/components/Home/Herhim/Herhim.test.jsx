import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Herhim from "./Herhim";

describe("Herhim component", () => {
    it("renders the Herhim component with correct content", () => {
        render(<Herhim />);
        let heading = screen.getByRole("heading", { name: /Buy more than a gift/i });
        let herImg = screen.getByAltText("Woman model");
        let himImg = screen.getByAltText("Man model");
        let herText = screen.getByText(/Buy for her/i);
        let himText = screen.getByText(/Buy for him/i);


        expect(heading).toBeInTheDocument();
        expect(herImg).toBeInTheDocument();
        expect(himImg).toBeInTheDocument();
        expect(herText).toBeInTheDocument();
        expect(himText).toBeInTheDocument();
    })

});