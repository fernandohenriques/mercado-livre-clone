import React from 'react';
import { render } from '@testing-library/react';

import Home from './index';

describe('pages <Home />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
