import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import products from './ducks/products';

const reducers = combineReducers({ products });

const makeStore = (initialStore = {}) => createStore(reducers, initialStore, applyMiddleware(thunk));

export { makeStore };
