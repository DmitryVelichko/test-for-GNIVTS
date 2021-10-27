import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

const renderComponent = () => render(<Header />);

describe('Header component', () => {
  it('snapshot matches', () => {
    expect(renderComponent).toMatchSnapshot();
  });
});
