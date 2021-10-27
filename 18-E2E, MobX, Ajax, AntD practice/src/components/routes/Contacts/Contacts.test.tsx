import React from 'react';
import { render } from '@testing-library/react';

import Contacts from './Contacts';

describe('<Contacts>', () => {
  it('should have title of contacts', () => {
    const { getByText } = render(<Contacts />);
    expect(getByText('Контакты')).toBeInTheDocument();
  });
});
