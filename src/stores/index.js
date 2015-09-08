'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddlware from 'redux-logger';
import reducer from '../reducers';

let createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddlware
)(createStore);

let store = createStoreWithMiddleware(reducer);
export default store;
