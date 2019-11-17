import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { initialState, fetchProduct, actionTypes } from './index';

describe('Product Duck Module', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ product: initialState });
  const { FETCH_PRODUCT_SUCCESS } = actionTypes;

  it('InitialState contract test', () => {
    expect(initialState.loading).toBeFalsy();
    expect(initialState.error).toBeFalsy();
    expect(initialState.products.length).toEqual(1);
  });

  it('Should dont fetch data if product already existing in the store', async () => {
    const productId = initialState.lastIdfetched;

    await store.dispatch(fetchProduct(productId));

    const actions = store.getActions();
    expect(actions.length).toEqual(0);
  });

  it('Should execute fetch data action', async () => {
    const mockProductId = 'MLA01';
    await store.dispatch(fetchProduct(mockProductId));

    const actions = store.getActions();
    const lastActionCalled = actions[actions.length - 1];

    expect(actions.length).toEqual(2);
    expect(lastActionCalled.type).toEqual(FETCH_PRODUCT_SUCCESS);
  });
});
