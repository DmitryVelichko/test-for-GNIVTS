import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '.';

describe('Search component', () => {
  it('handleSearch works fine', async () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
