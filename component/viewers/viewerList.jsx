import React from 'react';

export default class ViewerList extends React.Component {
  render() {
    return (
      <li>{this.props.data.user}</li>
    )
  }
}
