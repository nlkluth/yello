import React from 'react';
import Avatar from '../common/avatar.jsx';

export default class Chat extends React.Component {
  render() {
    return (
      <li className="chat">
        <Avatar />
        <h2 className="chatAuthor">
          {this.props.user}
        </h2>
        {this.props.children}
      </li>
    );
  }
}
