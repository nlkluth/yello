'use strict';

import React from 'react';

export default class VideoList extends React.Component {
  constructor() {
    super(props);

    let video = React.findDOMNode(this);
    video.src = window.URL.createObjectURL(props.stream);
    video.onloadedmetadata = () => video.play();
  }

  render() {
    return (
      <video></video>
    )
  }
}
