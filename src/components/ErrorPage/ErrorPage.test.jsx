import { describe, it, expect } from "vitest"
import { screen, render, findByTestId } from "@testing-library/react"
import { createMemoryRouter, RouterProvider, MemoryRouter } from "react-router-dom"
import App from "../../App"
import Home from "../Home/Home"
import ErrorPage from "./ErrorPage"
import userEvent from "@testing-library/user-event"

describe("ErrorPage component", () => {
    it("Renders error page correctly", () => {
        render( <MemoryRouter>
                    <ErrorPage />
                </MemoryRouter>
        )

        const heading = screen.getByRole("heading", {name: /Page Not Found/});
        const message = screen.getByText("The piece you're looking for may have been moved or no longer exists.");
        const link = screen.getByText(/go back/i);

        expect(heading).toBeInTheDocument();
        expect(message).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    })

    it("button redirects to index path", async () => {
         const user = userEvent.setup();

        const router = createMemoryRouter(
            [
            {
                path: "/",
                element: <App />,
                errorElement: <ErrorPage />,
                children: [
                {
                    index: true,
                    element: <Home />,
                },
                ],
            },
            ],
            {
            initialEntries: ["/wrong-route"],
            }
        );

        render(<RouterProvider router={router} />);

        const link = screen.getByRole("link", { name: /go back/i });

        await user.click(link);

        const home = await screen.findByTestId("home-component");

        expect(home).toBeInTheDocument();
        });
})