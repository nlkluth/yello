'use strict';

import React from 'react';
import ViewerList from './viewerList.jsx';

export default class ViewerBox extends React.Component {
  render() {
    return (
      <ViewerList viewers={this.props.viewers} />
    )
  }
}
