'use strict';

import speech from './speech';

export default () => {
  let videos = [];
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;

  let sourceSelected = constraints =>
    new Promise((resolve, reject) => {
      navigator.getUserMedia(constraints, resolve, reject);
    });

  return new Promise((resolve, reject) => {
    MediaStreamTrack.getSources(sourceInfos => {
      let constraints = {
        audio: false,
        video: {
          mandatory: {
            minWidth: 1280,
            minHeight: 720,
            maxWidth: screen.availWidth,
            maxHeight: screen.availHeight,
            maxFrameRate: 25
          },
        }
      };

      let screenConstraints = Object.assign({}, constraints, {
        video: {
          mandatory: {chromeMediaSource: 'screen'}
        }
      });

      videos.push(sourceSelected(screenConstraints));
      sourceInfos.forEach(info => {
        if (info.kind === 'audio') {
          return speech(sourceSelected(Object.assign({}, constraints, {
            audio: {optional: [{sourceId: info.id}]}
          })));
        }

        let videoConstraints = Object.assign({}, constraints, {optional: [{sourceId: info.id}]});
        videos.push(sourceSelected(videoConstraints));
      });

      Promise.all(videos)
        .then(resolve)
        .catch(reject);
    });
  });
};
