import React from 'react';

export default class ViewerList extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.data.user}</li>
      </div>
    )
  }
}
