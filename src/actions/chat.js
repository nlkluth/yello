'use strict';

import { NEW_MESSAGE, NEW_USER } from './constants';

export let newMessage = (message) => {
  type: NEW_MESSAGE,
  message
};

export let newUser = (user) => {
  type: NEW_USER,
  user
};
