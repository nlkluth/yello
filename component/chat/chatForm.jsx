import React from 'react';
import ChatList from './chatList.jsx';

export default class ChatForm extends React.Component {
  render() {
    return (
      <div className="chatform container-vertical">
        <textarea></textarea>
        <button type="submit" className="button primary">Submit</button>
      </div>
    )
  }
}
