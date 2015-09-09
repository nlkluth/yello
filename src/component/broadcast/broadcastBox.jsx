'use strict';

import React from 'react';
import BroadcastControls from './broadcastControls.jsx';
import BroadcastView from './broadcastView.jsx';

export default class BroadcastBox extends React.Component {
  render() {
    let {dispatch, broadcasters} = this.props;

    return (
      <div className="broadcastbox container-vertical">
        <BroadcastView dispatch={dispatch} broadcasters={broadcasters} />
        <BroadcastControls />
      </div>
    )
  }
}
