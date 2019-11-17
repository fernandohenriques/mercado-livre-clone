import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import Home from './index';

describe('pages <Home />', () => {
  const mockStore = configureMockStore();

  it('Snapshot testing without loading', () => {
    const store = mockStore({ search: { loading: false } });

    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Snapshot testing with loading', () => {
    const store = mockStore({ search: { loading: true } });

    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
