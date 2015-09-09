export default () => {
  let videos = [];
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;

  let sourceSelected = (audioSource, videoSource) => {
    let constraints = {
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'screen',
          maxWidth: screen.availWidth,
          maxHeight: screen.availHeight,
          maxFrameRate: 25
        },
        optional: [{sourceId: videoSource}]
      }
    };

    return new Promise((resolve, reject) => {
      navigator.getUserMedia(constraints, stream => {
        resolve(stream);
      }, e => reject(e));
    });
  };

  let getMedia = new Promise((resolve, reject) => {
    MediaStreamTrack.getSources(sourceInfos => {
      var audioSource = null;
      var videoSource = null;

      sourceInfos.forEach(info => {
        if (info.kind === 'audio') {
          audioSource = info.id;
        }

        if (info.kind === 'video') {
          videoSource = info.id;
        }

        videos.push(sourceSelected(audioSource, videoSource));
      });

      Promise.all(videos)
        .then(() => resolve(videos))
        .catch(() => reject(videos));
    });
  });

  return getMedia;
};
