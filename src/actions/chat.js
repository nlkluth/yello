'use strict';

import { NEW_MESSAGE, NEW_USER } from './constants';

export newMessage = (message) => {
  type: NEW_MESSAGE,
  message
}

export newUser = (user) => {
  type: NEW_USER,
  user
}
