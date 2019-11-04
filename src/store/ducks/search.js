import Api from 'services/api';

const initialState = {
  loading: false,
  error: false,
  result: {
    categories: [],
    products: [],
  },
};

const actionTypes = {
  FETCH_SEARCH_PENDING: 'app/search/FETCH_SEARCH_PENDING',
  FETCH_SEARCH_SUCCESS: 'app/search/FETCH_SEARCH_SUCCESS',
  FETCH_SEARCH_ERROR: 'app/search/FETCH_SEARCH_ERROR',
};

const { FETCH_SEARCH_PENDING, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR } = actionTypes;

const fetchSearchPending = () => ({
  type: FETCH_SEARCH_PENDING,
});

const fetchSearchSuccess = (payload) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload,
});

const fetchSearchError = () => ({
  type: FETCH_SEARCH_ERROR,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SEARCH_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case FETCH_SEARCH_SUCCESS: {
    const result = {
      categories: action.payload.categories || [],
      products: action.payload.items || [],
    };
    return {
      ...state,
      result,
      error: false,
      loading: false,
    };
  }
  case FETCH_SEARCH_ERROR: {
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

const fetchSearch = (q) => {
  const { getProducts } = new Api();

  return async (dispatch) => {
    dispatch(fetchSearchPending());

    try {
      const result = await getProducts(q);
      dispatch(fetchSearchSuccess(result));
    } catch (e) {
      dispatch(fetchSearchError());
    }
  };
};

export { initialState, fetchSearch };
export default reducer;
