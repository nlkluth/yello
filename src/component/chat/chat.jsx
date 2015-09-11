'use strict';

import React from 'react';

export default class Chat extends React.Component {
  render() {
    return (
      <li className="chat">
        <div className="author">{this.props.user}</div>
        {this.props.children}
      </li>
    );
  }
}
