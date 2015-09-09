'use strict';

import {
  NEW_USER, FETCH_VIDEO_INPUTS, FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS, INVALIDATE_VIDEO
} from '../actions/constants';

const intialState = {
  fetching: false,
  broadcasters: []
};

export default (state = intialState, action) => {
  let result;

  switch(action.type) {
    case NEW_USER:
      result = state;
    case FETCH_VIDEO_INPUTS:
      result = Object.assign({}, state, {
        fetching: true
      });
    case FETCH_VIDEO_SUCCESS:
      result = Object.assign({}, state, {
        fetching: false
      });
    case FETCH_VIDEO_FAILURE:
      result = Object.assign({}, state, {
        fetching: false
      });
    default:
      result = state;

    return result;
  }
};
