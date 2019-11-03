import React from 'react';
import { render } from '@testing-library/react';

import Products from './index';

describe('pages <Products />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Products />);

    expect(asFragment()).toMatchSnapshot();
  });
});
