import { combineReducers } from 'redux';
import { app } from './app-reducer';
import { test } from './test-reducer';

const rootReducer = combineReducers({
  app,
  test
});

export default rootReducer;