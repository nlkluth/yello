import React from 'react';
import ChatBox from './chat/chatBox.jsx';
import ViewerBox from './viewers/viewerBox.jsx';
import BroadcastBox from './broadcast/broadcastBox.jsx';
import api from '../server/stubApi';

class YelloApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: api.getChat(),
      broadcasters: api.getBroadcasters(),
      viewers: api.getViewers(),
      open: {
        chat: true,
        broadcasters: true,
        viewers: true
      }
    };
  }

  render() {
    return (
      <div className="container-nowrap">
        <ViewerBox viewers={this.state.viewers} open={this.state.open.viewers} />
        <BroadcastBox broadcasters={this.state.broadcasters} open={this.state.open.broadcasters} />
        <ChatBox chat={this.state.chat} open={this.state.open.chat} />
      </div>
    )
  }
}

React.render(
  <YelloApp />,
  document.getElementById('content')
);
