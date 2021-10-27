import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post component', () => {
  it('Post renders', () => {
    render(<Post title="Title 1" />);

    // screen.debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  it('Post renders with body', () => {
    render(<Post title="Title 1" body="123" />);

    expect(screen.getByText('123')).toBeInTheDocument();
  });
});
