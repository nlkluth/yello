'use strict';

import { NEW_MESSAGE, NEW_USER } from './constants';

export function newMessage(message) {
  return {
    type: NEW_MESSAGE,
    message
  }
}

export function newUser(user) {
  return {
    type: NEW_USER,
    user
  }
}
