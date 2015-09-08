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

    navigator.getUserMedia(constraints, stream => {
      dispatch(broadcasters.newUser(stream));
    }, e => console.log(e));
  };

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
    })

    sourceSelected(audioSource, videoSource);
  });
};