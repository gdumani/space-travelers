import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const store = configureStore(
  {
    reducer: { rocketsReducer, missionsReducer },
  },
  applyMiddleware(thunk, logger),
);

export default store;
