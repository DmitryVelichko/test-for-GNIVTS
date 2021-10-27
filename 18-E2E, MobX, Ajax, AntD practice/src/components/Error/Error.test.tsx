import React from 'react';
import { render } from '@testing-library/react';

import Error from './Error';

describe('<Error>', () => {
  it('should have error in main paragraph heading', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Ошибка')).toBeInTheDocument();
  });
});
