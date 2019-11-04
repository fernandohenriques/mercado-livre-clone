import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import search from './ducks/search';
import products from './ducks/products';

const reducers = combineReducers({ search, products });

const makeStore = (initialStore = {}) => createStore(reducers, initialStore, applyMiddleware(thunk));

export { makeStore };
