import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore(
  {},
  applyMiddleware(thunk, logger),
);

export default store;
