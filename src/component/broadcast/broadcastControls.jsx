'use strict';

import React from 'react';
import BroadcastList from './controls/broadcastList.jsx';
import BroadcastOptions from './controls/broadcastOptions.jsx';

export default class BroadcastControls extends React.Component {
  render() {
    return (
      <div className="broadcastControls">
        <BroadcastList />
        <BroadcastOptions />
      </div>
    )
  }
}
