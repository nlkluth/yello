'use strict';

import React from 'react';

export default class Chat extends React.Component {
  render() {
    return (
      <li className="chat">
        <span className="author">{this.props.user}</span>
        {this.props.children}
      </li>
    );
  }
}
