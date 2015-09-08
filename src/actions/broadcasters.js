'use strict';

import { NEW_USER } from './constants';

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
