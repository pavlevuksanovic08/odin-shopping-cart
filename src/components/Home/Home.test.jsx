import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from './Home';

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