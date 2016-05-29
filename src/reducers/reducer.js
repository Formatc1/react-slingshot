// import {} from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'action':
      return state;
    default:
      return state;
  }
}
