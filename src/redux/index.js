import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import default_reducer from './default_reducer';
import chance from './chance';

export default combineReducers({
  routing: routerReducer,
  default_reducer,
  chance
});
