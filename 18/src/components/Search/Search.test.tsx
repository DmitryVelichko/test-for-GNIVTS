import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './index';

describe('Search is working', () => {
  it('handleSearch is working', async () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});

describe('<Search>', () => {
  it('should callback work', () => {
    const callbackFunc = jest.fn();
    const { getByDisplayValue } = render(
      <Search search="initial" handleSearch={callbackFunc} />,
    );

    const input = getByDisplayValue('initial');
    fireEvent.change(input, { target: { value: 'search' } });
    expect(callbackFunc).toBeCalled();
  });
});
