'use strict';

import React from 'react';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.src = window.URL.createObjectURL(props.stream);
  }

  render() {
    return (
      <video src={this.src}></video>
    )
  }

  componentDidMount() {
    let video = React.findDOMNode(this);
    video.onloadedmetadata = () => video.play();
  }
}
