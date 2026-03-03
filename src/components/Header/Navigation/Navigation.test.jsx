import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'
import { MemoryRouter } from 'react-router-dom'

describe('Navigation component', () => {
    it('renders the navigation links with paths', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        
        )

        const homeLink = screen.getByRole('link', { name: /Home/i })
        const shopLink = screen.getByRole('link', { name: /Shop/i })
        const cartLink = screen.getByRole('link', { name: /Cart/i })

        expect(homeLink).toHaveAttribute("href", "/")
        expect(shopLink).toHaveAttribute("href", "/shop")
        expect(cartLink).toHaveAttribute("href", "/cart")
    })
})