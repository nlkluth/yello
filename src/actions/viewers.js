'use strict';

import { NEW_USER } from './constants';

export let newUser = (user) => ({
  type: NEW_USER,
  user
});
