'use strict';

import React from 'react';
import VideoList from './video/videoList.jsx';
import { broadcasters } from '../../actions'

export default class BroadcastView extends React.Component {
  render() {
    let videoList = this.props.broadcasters.broadcasters.map(stream =>
      <VideoList key={stream.id} stream={stream} />
    );

    return (
      <div className="broadcastView container">
        {videoList}
      </div>
    )
  }
}
