import React from 'react';
import { render, screen } from '@testing-library/react';

import About from '.';

const renderComponent = () => render(<About data-testid={1} />);

describe('About component', () => {
  it('component works fine', () => {
    expect(renderComponent).not.toThrow();
  });

  it('displays text', () => {
    renderComponent();
    expect(screen.getByText(/Lorem ipsum dolor sit, amet consectetur adipisicing elit./gi)).toBeInTheDocument();
  });
});
