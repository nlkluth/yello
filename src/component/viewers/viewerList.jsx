'use strict';

import React from 'react';
import Viewer from './viewer.jsx';

export default class ViewerList extends React.Component {
  render() {
    let viewers = this.props.viewers.map(result =>
      <Viewer key={result.id} user={result.user} />
    )

    return (
      <ul className="viewerbox">
        {viewers}
      </ul>
    )
  }
}
