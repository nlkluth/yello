import React from 'react';
import ChatList from './chatList.jsx';
import ChatForm from './chatForm.jsx';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div className="chatbox container-vertical">
        <ChatList chat={this.props.chat} />
        <ChatForm />
      </div>
    )
  }
}
