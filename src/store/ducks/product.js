import Api from 'services/api';

const initialState = {
  loading: false,
  error: false,
  products: [{
    id: 0,
    title: '',
    description: '',
    picture: '',
    price: {
      amount: 0,
    },
    sold_quantity: 0,
    free_shipping: false,
  }],
};

const actionTypes = {
  FETCH_PRODUCT_PENDING: 'app/product/FETCH_PRODUCT_PENDING',
  FETCH_PRODUCT_SUCCESS: 'app/product/FETCH_SEARCH_SUCCESS',
  FETCH_PRODUCT_ERROR: 'app/product/FETCH_SEARCH_ERROR',
};

const { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } = actionTypes;

const fetchProductPending = () => ({
  type: FETCH_PRODUCT_PENDING,
});

const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});

const fetchProductError = () => ({
  type: FETCH_PRODUCT_ERROR,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PRODUCT_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case FETCH_PRODUCT_SUCCESS: {
    const product = action.payload;
    return {
      error: false,
      loading: false,
      products: [...state.products, product],
    };
  }
  case FETCH_PRODUCT_ERROR: {
    return {
      ...state,
      error: true,
      loading: false,
    };
  }
  default:
    return state;
  }
};

const fetchProduct = (id) => {
  const { getProduct } = new Api();

  return async (dispatch, getState) => {
    const { products } = getState();
    const product = products.find((item) => item.id === id);

    if (product) return;

    dispatch(fetchProductPending());

    try {
      const result = await getProduct(id);
      dispatch(fetchProductSuccess(result));
    } catch (e) {
      dispatch(fetchProductError());
    }
  };
};

export { initialState, fetchProduct };
export default reducer;
