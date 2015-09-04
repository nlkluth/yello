'use strict';

import { NEW_USER } from './constants';

export newUser = (user) => {
  type: NEW_USER,
  user
}
