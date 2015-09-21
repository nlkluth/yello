'use strict';

import hark from 'hark';
import store from '../stores';
import { talk } from '../actions';

export default (stream) => {
  stream.then((result) => {
    console.log('result: ', result);
    let speechEvents = hark(result, {});

    speechEvents.on('speaking', () =>
      store.dispatch(talk.talking({user: 'test'})));

    speechEvents.on('stopped_speaking', () =>
      store.dispatch(talk.stoppedTalking({user: 'test'})));
  }).catch((error) => {
    console.log('Error: ', error);
  });
};
