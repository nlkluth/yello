'use strict';

import getUserMedia from '../helpers/getUserMedia';
import {
  NEW_USER, FETCH_VIDEO_INPUTS, FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS, INVALIDATE_VIDEO
} from './constants';

export let newUser = (user) => {
  type: NEW_USER,
  user
};

export let receiveFailure = (video) => {
  type: FETCH_VIDEO_FAILURE,
  user
};

export let receiveVideo = (video) => {
  type: FETCH_VIDEO_SUCCESS,
  video
};

export let getVideo = (video) => {
  type: FETCH_VIDEO_INPUTS,
  video
};

export let invalidateVideoList = (list) => {
  type: INVALIDATE_VIDEO,
  list
};

export let fetchVideo = (video) =>
  (dispatch) => {
    dispatch(getVideo(video));

    return getUserMedia().then(response => dispatch(receiveVideo(response)))
      .catch(error => dispatch(receiveFailure(error)));
  };
