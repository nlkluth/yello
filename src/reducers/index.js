'use strict';

import { combineReducers } from 'redux';
import chat from './chat';

const yelloApp = combineReducers({
  chat
});

export default yelloApp;
