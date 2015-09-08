'use strict';

import React from 'react';
import VideoList from './video/videoList.jsx';
import Loading from '../common/loading.jsx';
import { broadcasters } from '../../actions'

export default class BroadcastView extends React.Component {
  render() {
    let videoList;

    videoList = this.props.broadcasters.broadcasters.map(stream =>
      <VideoList key={stream.id} stream={stream} />
    );

    if (this.props.broadcasters.fetching) {
      videoList = <Loading />
    }

    return (
      <div className="broadcastView container">
        {videoList}
      </div>
    )
  }
}
