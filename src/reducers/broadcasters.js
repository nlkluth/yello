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
  switch(action.type) {
    case NEW_USER:
      return state;
    default:
      return state;
  }
};
