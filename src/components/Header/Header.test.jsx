import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header component', () => {
  it('renders the logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const logo = screen.getByAltText(/Logo/i)
    expect(logo).toBeInTheDocument()
  })
  it('renders the navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })
})