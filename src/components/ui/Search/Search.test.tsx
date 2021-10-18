import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '.';

describe('Search component', () => {
  it('snapshot matches', () => {
    const component = render(<Search search="" setSearch={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it('placeholder is displayed', () => {
    const onChange = jest.fn();
    render(<Search search="" setSearch={onChange} />);

    expect(screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
  });
});
