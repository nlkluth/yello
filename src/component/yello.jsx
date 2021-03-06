'use strict';

import {connect} from 'react-redux';
import React from 'react';
import {RouteHandler} from 'react-router';
import NavBox from './common/navBox.jsx';
import { broadcasters } from '../actions'

@connect(state => {
  return {
    chat: state.chat,
    viewers: state.viewers,
    broadcasters: state.broadcasters
  }
})
export default class YelloApp extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(broadcasters.fetchVideo({user: null}));
  }

  render() {
    return (
      <div className="container-vertical-nowrap">
        <RouteHandler {...this.props}/>
        <NavBox />
      </div>
    )
  }
}
