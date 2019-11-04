import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import Home from './index';

describe('pages <Home />', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
