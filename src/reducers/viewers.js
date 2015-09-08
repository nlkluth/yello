'use strict';

import { NEW_USER } from '../actions/constants';
const intialState = [{id: 1, user: 'jen'}, {id: 2, user: 'brian'}];

export default (state = intialState, action) => {
  switch(action.type) {
    case NEW_USER:
      return state;
    default:
      return state;
  }
};
