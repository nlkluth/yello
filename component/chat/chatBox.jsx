import React from 'react';
import ChatList from './chatList.jsx';
import ChatForm from './chatForm.jsx';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div className="chatbox container-vertical">
        <ul className="chatlist">
          {this.props.chat.map(function(result) {
             return <ChatList key={result.id} data={result} />;
          })}
        </ul>
        <ChatForm />
      </div>
    )
  }
}
