import React from 'react';
import ViewerList from './viewerList.jsx';

export default class ViewerBox extends React.Component {
  render() {
    return (
      <ul className="viewerbox">
        {this.props.viewers.map(function(result) {
           return <ViewerList key={result.id} data={result}/>;
        })}
      </ul>
    )
  }
}
