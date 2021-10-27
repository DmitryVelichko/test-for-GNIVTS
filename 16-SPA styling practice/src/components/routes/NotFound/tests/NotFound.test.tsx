import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFoundRoute from '../NotFound';

const renderComponent = () => render(<NotFoundRoute />);

describe('Component NotFound', () => {
  it('component NotFound works fine', () => {
    expect(renderComponent).not.toThrow();
  });

  it('displays text', () => {
    renderComponent();
    expect(screen.getByText(/404 Page not found!/i)).toBeInTheDocument();
  });
});
