'use strict';

import { NEW_MESSAGE, NEW_USER } from '../actions/constants';
const intialState = {messages: []};

export default (state = intialState, action) => {
  switch(action.type) {
    case NEW_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, {
          id: state.messages.length + 1,
          text: action.message.text,
          user: action.message.user
        }]
      });
    case NEW_USER:
      return state;
    default:
      return state;
  }
};
