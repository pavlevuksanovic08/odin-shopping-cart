import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from './Home';

if (typeof HTMLDialogElement !== 'undefined') {
  HTMLDialogElement.prototype.showModal = vi.fn(function() {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function() {
    this.removeAttribute("open");
  });
}

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useOutletContext: () => ({
        cartItems: [
          {
            item: { id: 1, title: "Test Product", price: 10, image: "test.jpg" },
            quantity: 2
          }
        ],
        totalPrice: vi.fn().mockReturnValue(100)
      }
    ),
    useLoaderData: () => [
      {id: 1, title: "Title", price: 20}
    ]
  }
})

import { MemoryRouter, useLoaderData, useOutletContext } from 'react-router-dom';

describe('Home component', () => {
  it('renders the Home component correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>);    
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  })
  it('renders the model image with correct alt text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>);
    const modelImage = screen.getByAltText('Model');
    expect(modelImage).toBeInTheDocument();
  })
  });