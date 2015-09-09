'use strict';

import {
  NEW_USER, FETCH_VIDEO_INPUTS, FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS, INVALIDATE_VIDEO
} from '../actions/constants';

const intialState = {
  fetching: false,
  error: false,
  broadcasters: []
};

export default (state = intialState, action) => {
  let result;

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
    default:
      result = state;
  }

  return result;
};
