'use strict';

import { combineReducers } from 'redux';
import chat from './chat';
import viewers from './viewers';
import broadcasters from './broadcasters';

const yelloApp = combineReducers({
  chat, viewers, broadcasters
});

export default yelloApp;
