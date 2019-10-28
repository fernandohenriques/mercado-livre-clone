const initialState = [
  {
    id: 0,
    title: '',
    picture: '',
    price: {
      amount: 0,
    },
    adress: {
      state_name: '',
    },
    free_shipping: false,
  },
];

const actionTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
};

const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_PRODUCTS:
    // console.log(state);
    // console.log(action);

    return state;
  default:
    return state;
  }
};

export { actionTypes, setProducts };
export default reducer;
