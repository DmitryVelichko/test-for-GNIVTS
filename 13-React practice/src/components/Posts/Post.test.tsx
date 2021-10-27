import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post component', () => {
  it('Post renders', () => {
    render(<Post title="Title 1" />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText(/Title/)).toBeInTheDocument();
  });
  it('Post renders with body', () => {
    render(<Post title="Title 1" body="check" />);

    expect(screen.getByText('check')).toBeInTheDocument();
  });
});
