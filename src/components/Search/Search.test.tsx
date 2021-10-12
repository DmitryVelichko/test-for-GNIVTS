import React from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Search from './index';

describe('Search component works correctly', () => {
  it('handleSearch callback works', async () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);

    
  });
});