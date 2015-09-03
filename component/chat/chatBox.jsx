import React from 'react';
import ChatList from './chatList.jsx';

export default class ChatBox extends React.Component {
  render() {
    return (
      <ul className="chatbox">
        {this.props.chat.map(function(result) {
           return <ChatList key={result.id} data={result}/>;
        })}
      </ul>
    )
  }
}
