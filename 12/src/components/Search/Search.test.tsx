import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '.';

describe('Search component', () => {
  it('handleSearch cb works', async () => {
    const onChange = jest.fn();

    render(<Search search="" handleSearch={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('placeholder works with defaults', () => {
    const onChange = jest.fn();

    render(<Search search="" handleSearch={onChange} />);

    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
  });
  it('placeholder works with prop', () => {
    const onChange = jest.fn();

    render(
      <Search search="" handleSearch={onChange} placeholder="find post" />,
    );

    expect(screen.getByPlaceholderText('find post')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('search...')).toBeNull();
  });
});
