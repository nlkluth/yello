'use strict';

import { combineReducers } from 'redux';
import chat from './chat';
import viewers from './viewers';

const yelloApp = combineReducers({
  chat, viewers
});

export default yelloApp;
