'use strict';

import { NEW_MESSAGE, NEW_USER } from '../actions/constants';
const intialState = [{id: 1, user: 'jen', text: 'foo'}, {id: 2, user: 'brian', text: 'bar bar'}];

export default (state = intialState, action) => {
  switch(action.type) {
    case NEW_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, {
          text: action.text,
          user: action.user
        }]
      });
    case NEW_USER:
      return state;
    default:
      return state;
  }
}
