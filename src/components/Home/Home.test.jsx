import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from './Home';

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useOutletContext: () => [
      {item: {id: 1, title: "Title", price: 20}, quantity: 2}
    ],
    useLoaderData: () => [
      {id: 1, title: "Title", price: 20}
    ]
  }
})

import { useLoaderData, useOutletContext } from 'react-router-dom';

describe('Home component', () => {
  it('renders the Home component correctly', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  })
  it('renders the model image with correct alt text', () => {
    render(<Home />);
    const modelImage = screen.getByAltText('Model');
    expect(modelImage).toBeInTheDocument();
  })
  });