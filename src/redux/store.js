import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});
const store = configureStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
