'use strict';

import React from 'react';
import VideoList from './video/videoList.jsx';
import Loading from '../common/loading.jsx';
import { broadcasters } from '../../actions'

export default class BroadcastView extends React.Component {
  componentDidMount() {
    this.props.dispatch(broadcasters.fetchVideo());
  }

  render() {
    let list = this.props.broadcasters;
    let videoList;

    videoList = list.broadcasters.map(stream =>
      <VideoList key={stream.id} stream={stream} />
    );

    if (list.fetching) {
      videoList = <Loading />
    }

    return (
      <div className="broadcastView container">
        {videoList}
      </div>
    )
  }
}
