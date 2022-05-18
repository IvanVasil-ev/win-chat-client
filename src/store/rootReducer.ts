import { combineReducers } from 'redux';

import application from './slices/application';
import authorization from './slices/authorization';

export const rootReducer = combineReducers({
  application,
  authorization,
});
