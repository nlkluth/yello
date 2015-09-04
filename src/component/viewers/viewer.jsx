'use strict';

import React from 'react';
import Avatar from '../common/avatar.jsx';

export default class Viewer extends React.Component {
  render() {
    return (
      <li>
        <Avatar />
        {this.props.user}
      </li>
    )
  }
}
