'use strict';

import React from 'react';
import ChatList from './chatList.jsx';
import ChatForm from './chatForm.jsx';

export default class ChatBox extends React.Component {
  render() {
    let {dispatch, chat} = this.props;

    return (
      <div className="chatbox container-vertical">
        <ChatList chat={chat} />
        <ChatForm dispatch={dispatch} />
      </div>
    )
  }
}
