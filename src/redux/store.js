import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const store = configureStore(
  {
    reducer: { rocketsReducer },
  },
  applyMiddleware(thunk, logger),
);

export default store;
