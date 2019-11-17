import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import { initialState as searchInitialState } from 'store/ducks/search';
import { initialState as productInisialState } from 'store/ducks/product';
import Products from './index';

describe('pages <Products />', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ search: searchInitialState, product: productInisialState });

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
