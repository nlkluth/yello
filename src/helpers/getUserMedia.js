export default () => {
  let videos = [];
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;

  let sourceSelected = constraints =>
    new Promise((resolve, reject) => {
      navigator.getUserMedia(constraints, stream => {
        resolve(stream);
      }, e => reject(e));
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
          return;
        }

        let videoConstraints = Object.assign({}, constraints, {optional: [{sourceId: info.id}]});
        videos.push(sourceSelected(videoConstraints));
      });

      Promise.all(videos)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  });
};
