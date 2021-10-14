import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post component works correctly', () => {
  it('Post render', () => {
    render(<Post title="Title 1" />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText(/Title/)).toBeInTheDocument();
  });
  it('Post render with body', () => {
    render(<Post title="Title 1" body="123" />);

    expect(screen.getByText('123')).toBeInTheDocument();
  });
});
