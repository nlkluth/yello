'use strict';

import React from 'react';
import VideoList from './video/videoList.jsx';
import Loading from '../common/loading.jsx';

export default class BroadcastView extends React.Component {
  render() {
    let list = this.props.broadcasters;
    let videoList;

    videoList = list.broadcasters.map(stream =>
      <VideoList key={stream.id} stream={stream} />
    );

    if (list.fetching) {
      setTimeout(() => videoList = <Loading />, 500);
    }

    return (
      <div className="broadcastView container-nowrap">
        <div className="videolist">
          {videoList}
        </div>
      </div>
    )
  }
}
