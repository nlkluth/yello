'use strict';

import hark from 'hark';
import { dispatch } from 'redux';
import { talk } from '../actions';

export default (stream) => {
  stream.then((result) => {
    console.log('result: ', result);
    let speechEvents = hark(result, {});

    speechEvents.on('speaking', () => {
      console.log('speaking');
      dispatch(talk.talking({user: 'test'}));
    });

    speechEvents.on('stopped_speaking', () => {
      console.log('stopped speaking');
      dispatch(talk.stoppedTalking({user: 'test'}));
    });
  }).catch((error) => {
    console.log('Error: ', error);
  });
};
