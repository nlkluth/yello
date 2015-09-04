import React from 'react';

export default class BroadcastView extends React.Component {
  render() {
    return (
      <div className="broadcastView container">
        <video className="host" ref="hostScreen"></video>
      </div>
    )
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;

    let constraints = {
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'screen',
          maxWidth: screen.availWidth,
          maxHeight: screen.availHeight,
          maxFrameRate: 25
        },
        optional: []
      }
    };

    navigator.getUserMedia(constraints, stream => {
      let video = React.findDOMNode(this.refs.hostScreen);
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = () => {
        video.play();
      };
    }, e => console.log(e));
  }
}
