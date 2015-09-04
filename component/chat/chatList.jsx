import React from 'react';

export default class ChatList extends React.Component {
  render() {
    return (
      <li>{this.props.data.user}: {this.props.data.text}</li>
    )
  }
}
