import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({});

const store = configureStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
