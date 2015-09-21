'use strict';

import {
  NEW_USER, FETCH_VIDEO_INPUTS, FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS, INVALIDATE_VIDEO, START_TALK,
  END_TALK
} from '../actions/constants';

const intialState = {
  fetching: false,
  error: false,
  broadcasters: []
};

export default (state = intialState, action) => {
  let result, broadcasterList, broadcaster;

  switch(action.type) {
    case NEW_USER:
      result = state;
      break;
    case FETCH_VIDEO_INPUTS:
      result = Object.assign({}, state, {
        fetching: true,
        error: false
      });
      break;
    case FETCH_VIDEO_SUCCESS:
      action.video = action.video.map(x => ({ talking: false, source: x}));

      result = Object.assign({}, state, {
        fetching: false,
        broadcasters: [...state.broadcasters, ...action.video]
      });
      break;
    case FETCH_VIDEO_FAILURE:
      result = Object.assign({}, state, {
        fetching: false,
        error: true
      });
      break;
    case START_TALK:
      broadcaster = state.broadcasters.findIndex(user => Object.is(user, action.user));
      Object.assign({}, broadcaster, {talking: true});

      result = Object.assign({}, state, {
        broadcasterList
      });
    case END_TALK:
      broadcaster = state.broadcasters.findIndex(user => Object.is(user, action.user));
      Object.assign({}, broadcaster, {talking: false});

      result = Object.assign({}, state, {
        broadcasterList
      });
    default:
      result = state;
  }

  return result;
};
