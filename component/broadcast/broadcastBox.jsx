import React from 'react';
import BroadcastControls from './broadcastControls.jsx';
import BroadcastView from './broadcastView.jsx';

export default class BroadcastBox extends React.Component {
  render() {
    return (
      <div className="broadcastbox container-vertical">
        <BroadcastView />
        <BroadcastControls />
      </div>
    )
  }
}
