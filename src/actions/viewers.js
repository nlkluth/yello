'use strict';

import { NEW_USER } from './constants';

export function newUser(user) {
  type: NEW_USER,
  user
};
