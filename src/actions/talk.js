'use strict';

import { START_TALK, END_TALK, TALKING_FAILURE } from './constants';

export function talking(user) {
  return {
    type: START_TALK,
    user
  };
}

export function stoppedTalking(user) {
  return {
    type: END_TALK,
    user
  };
}

export function talkingError(user) {
  return {
    type: TALKING_FAILURE,
    user
  };
}
