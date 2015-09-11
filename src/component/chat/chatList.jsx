'use strict';

import React from 'react';
import Chat from './chat.jsx';

export default class ChatList extends React.Component {
  render() {
    let chatList = this.props.chat.messages.map(result =>
      <Chat key={result.id} user={result.user}>
        {result.text}
      </Chat>
    );

    return (
      <ul className="chatlist">
        {chatList}
      </ul>
    )
  }
}
