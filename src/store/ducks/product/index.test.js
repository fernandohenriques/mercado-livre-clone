import { initialState } from './index';

describe('Product Duck Module', () => {
  it('InitialState contract test', () => {
    expect(initialState.loading).toBeFalsy();
    expect(initialState.error).toBeFalsy();
    expect(initialState.products.length).toEqual(1);
  });
});
