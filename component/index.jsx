import React from 'react';
import ChatBox from './chat/chatBox.jsx';
import api from '../server/stubApi';

class YelloApp extends React.Component {
  componentWillMount() {
    this.setState({
      chat: api.getChat(),
      broadcasters: api.getBroadcasters(),
      viewers: api.getViewers(),
      open: {
        chat: true,
        broadcasters: true,
        viewers: true
      }
    });
  }

  render() {
    return (
      <div className="chatbox">
        <ChatBox chat={this.state.chat} open={this.state.open.chat} />
      </div>
    )
  }
}

React.render(
  <YelloApp />,
  document.getElementById('content')
);
