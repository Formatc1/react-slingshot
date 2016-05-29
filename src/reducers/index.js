import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  reducer
});

export default rootReducer;
