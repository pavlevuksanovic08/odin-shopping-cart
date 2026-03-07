import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'
import { MemoryRouter } from 'react-router-dom'

describe('Navigation component', () => {
    it('renders the navigation links with paths', () => {
        render(
            <MemoryRouter>
                <Navigation cartLength={3}/>
            </MemoryRouter>
        
        )

        const homeLink = screen.getByRole('link', { name: /Home/i })
        const shopLink = screen.getByRole('link', { name: /Shop/i })
        const cartLink = screen.getByRole('link', { name: /Cart/i })

        expect(homeLink).toHaveAttribute("href", "/")
        expect(shopLink).toHaveAttribute("href", "/shop")
        expect(cartLink).toHaveAttribute("href", "/cart")
    })
    
    it("cart link has number of items", () => {
        render(
            <MemoryRouter>
                <Navigation cartLength={3}/>
            </MemoryRouter>
        )

        expect(screen.getByText("3")).toBeInTheDocument();
    })

    it("cart link has NOT number of items", () => {
        render(
            <MemoryRouter>
                <Navigation cartLength={0}/>
            </MemoryRouter>
        )
        const temp = screen.queryByTestId("cartLength")
        expect(temp).not.toBeInTheDocument();
    })
})