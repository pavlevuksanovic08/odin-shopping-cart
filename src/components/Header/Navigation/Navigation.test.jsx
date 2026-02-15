import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation component', () => {
    it('renders the navigation links', () => {
        render(<Navigation />)
        const homeLink = screen.getByRole('link', { name: /Home/i })
        const shopLink = screen.getByRole('link', { name: /Shop/i })
        const cartLink = screen.getByRole('link', { name: /Cart/i })
        expect(homeLink).toBeInTheDocument()
        expect(shopLink).toBeInTheDocument()
        expect(cartLink).toBeInTheDocument()
    })
})