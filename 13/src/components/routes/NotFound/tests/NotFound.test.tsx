import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundRoute from '../NotFound';

const renderComponent = () => render(<NotFoundRoute />);

describe('NotFound component', () => {
  it('snapshot matches', () => {
    const tree = renderer.create(<NotFoundRoute />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('component renders fine', () => {
    expect(renderComponent).not.toThrow();
  });

  it('has text', () => {
    renderComponent();

    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
  });
});
