'use strict';

import getUserMedia from '../helpers/getUserMedia';
import {
  NEW_USER, FETCH_VIDEO_INPUTS, FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS, INVALIDATE_VIDEO
} from './constants';

export function newUser(user) {
  return {
    type: NEW_USER,
    user
  }
}

export function receiveFailure(video) {
  return {
    type: FETCH_VIDEO_FAILURE,
    user
  }
}

export function receiveVideo(video) {
  return {
    type: FETCH_VIDEO_SUCCESS,
    video
  }
}

export function getVideo(video) {
  return {
    type: FETCH_VIDEO_INPUTS,
    video
  }
}

export function invalidateVideoList(list) {
  return {
    type: INVALIDATE_VIDEO,
    list
  }
}

export function fetchVideo(video) {
  return dispatch => {
    dispatch(getVideo(video));

    return getUserMedia()
      .then(response => dispatch(receiveVideo(response)))
      .catch(error => dispatch(receiveFailure(error)));
  };
}
