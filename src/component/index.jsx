'use strict';

import React from 'react';
import ChatBox from './chat/chatBox.jsx';
import ViewerBox from './viewers/viewerBox.jsx';
import BroadcastBox from './broadcast/broadcastBox.jsx';
import {Provider, connect} from 'react-redux';
import store from '../stores';

@connect(state => {
  return {
    chat: state.chat,
    viewers: state.viewers,
    broadcasters: state.broadcasters
  }
})
class YelloApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: {
        chat: true,
        broadcasters: true,
        viewers: true
      }
    };
  }

  render() {
    const { dispatch, chat, viewers, broadcasters } = this.props;

    return (
      <div className="container-nowrap">
        <ViewerBox viewers={viewers} open={this.state.open.viewers} />
        <BroadcastBox broadcasters={broadcasters} open={this.state.open.broadcasters} />
        <ChatBox chat={chat} open={this.state.open.chat} />
      </div>
    )
  }
}

React.render(
  <Provider store={store}>
    {() => <YelloApp />}
  </Provider>,
  document.getElementById('content')
);
