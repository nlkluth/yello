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
  let result, broadcasterList, index;

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
      action.video = action.video.map((x, index) => ({
        talking: false,
        source: x,
        user: 'test',
        id: index
      }));

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
      broadcasterList = state.broadcasters;
      index = broadcasterList.findIndex(user => user.user === action.user.user);
      broadcasterList[index].talking = true;

      result = Object.assign({}, state, {
        broadcasters: broadcasterList
      });
      break;
    case END_TALK:
      broadcasterList = state.broadcasters;
      index = broadcasterList.findIndex(user => user.user === action.user.user);
      broadcasterList[index].talking = false;

      result = Object.assign({}, state, {
        broadcasters: broadcasterList
      });
      break;
    default:
      result = state;
  }

  return result;
};
