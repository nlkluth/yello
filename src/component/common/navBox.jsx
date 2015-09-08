'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class NavBox extends React.Component {
  render() {
    return (
      <div className="navbox">
        <Link to="Home">Broadcast</Link>
        <Link to="Viewers">Viewers</Link>
        <Link to="Chat">Chat</Link>
      </div>
    );
  }
}
