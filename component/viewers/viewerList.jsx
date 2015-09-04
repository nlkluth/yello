import React from 'react';
import Avatar from '../common/avatar.jsx';

export default class ViewerList extends React.Component {
  render() {
    return (
      <li>
        <Avatar />
        {this.props.data.user}
      </li>
    )
  }
}
