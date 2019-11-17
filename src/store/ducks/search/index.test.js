import nock from 'nock';
import faker from 'faker';
import dotenv from 'dotenv';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { initialState, fetchSearch, actionTypes } from './index';

describe('Search Duck Module', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ search: initialState });
  const { FETCH_SEARCH_SUCCESS, FETCH_SEARCH_PENDING } = actionTypes;

  afterEach(() => {
    dotenv.config();
  });

  it('InitialState contract test', () => {
    expect(initialState.loading).toBeFalsy();
    expect(initialState.error).toBeFalsy();
    expect(initialState.result.products.length).toEqual(0);
    expect(initialState.result.categories.length).toEqual(0);
  });

  it('Should execute fetch data action', async () => {
    const q = 'perfumes';
    const mockPayload = {
      categories: ['Belleza y Cuidado Personal', 'Perfumes'],
      items: [{
        id: faker.random.uuid().split('-')[0],
        title: faker.commerce.productName(),
        price: {
          currency: faker.finance.currencyCode(),
          amount: faker.finance.amount(),
        },
        picture: faker.image.imageUrl(),
        condition: 'new',
        free_shipping: faker.random.boolean(),
      }],
    };

    nock(process.env.API_URL)
      .get(`/items?q=${q}`)
      .reply(200, mockPayload);

    await store.dispatch(fetchSearch(q));

    const actions = store.getActions();
    const lastActionCalled = actions[actions.length - 1];

    expect(actions.length).toEqual(2);
    expect(actions[0].type).toEqual(FETCH_SEARCH_PENDING);
    expect(lastActionCalled.type).toEqual(FETCH_SEARCH_SUCCESS);
    expect(lastActionCalled.payload).toEqual(mockPayload);
  });
});
