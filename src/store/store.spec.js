// import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', () => {
  it('should create store with routing', () => {
    const store = createStore(rootReducer, initialState);

    const expected = {
      locationBeforeTransitions: null
    };

    expect(store.getState().routing).to.deep.equal(expected);
  });
});
