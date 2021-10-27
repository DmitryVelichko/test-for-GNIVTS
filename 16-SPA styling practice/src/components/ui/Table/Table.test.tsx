import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from './Table';

const user = [{
  id: 1,
  name: 'Иван Петров',
  email: 'ivanpetrov@mail.ru',
}];

const tableCols = [
  { type: 'id', label: 'Id' },
  { type: 'name', label: 'Name' },
  { type: 'email', label: 'Email' },
];

const renderComponent = () => render(<Table content={user} tableCols={tableCols} />);

describe('Table component', () => {
  it('Table component renders fine', () => {
    expect(renderComponent).not.toThrow();
  });

  it('displays id', () => {
    renderComponent();
    expect(screen.getByText(/1/gi)).toBeInTheDocument();
  });

  it('displays name', () => {
    renderComponent();
    expect(screen.getByText(/Иван Петров/gi)).toBeInTheDocument();
  });

  it('displays email', () => {
    renderComponent();
    expect(screen.getByText(/ivanpetrov@mail.ru/gi)).toBeInTheDocument();
  });
});
