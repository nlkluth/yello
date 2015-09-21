'use strict';

import React from 'react';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.src = window.URL.createObjectURL(props.stream.source);
  }

  render() {
    let {stream} = this.props;
    let talking = stream.talking ? 'broadcast talking' : 'broadcast';

    return (
      <video className={talking} src={this.src}></video>
    )
  }

  componentDidMount() {
    let video = React.findDOMNode(this);
    video.onloadedmetadata = video.play;
  }
}
