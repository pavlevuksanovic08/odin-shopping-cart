import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByAltText(/Logo/i)
    expect(logo).toBeInTheDocument()
  })
  it('renders the navigation', () => {
    render(<Header />)
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })
})