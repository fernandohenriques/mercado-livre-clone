import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import { initialState } from 'store/ducks/search';
import Products from './index';

describe('pages <Products />', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ search: initialState });

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
