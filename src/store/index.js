import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import search from './ducks/search/index';
import product from './ducks/product/index';

const reducers = combineReducers({ search, product });

const makeStore = (initialStore = {}) => createStore(reducers, initialStore, applyMiddleware(thunk));

export { makeStore };
