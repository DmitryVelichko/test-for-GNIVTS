import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post component works correctly', () => {
  it('Post render', () => {
    render(<Post title="Title 1" />);

   
});
