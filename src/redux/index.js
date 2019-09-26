import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import default_reducer from './default_reducer';
import chance from './chance';
import bet_slip from './bet_slip';

export default combineReducers({
  routing: routerReducer,
  default_reducer,
  chance,
  bet_slip
});
