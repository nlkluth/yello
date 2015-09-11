'use strict';

import React from 'react';
import { chat } from '../../actions'

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = React.findDOMNode(this.refs.text).value.trim();
    if (text === '') {
      return;
    }

    this.props.dispatch(chat.newMessage({user: 'test', text}));
    React.findDOMNode(this.refs.text).value = ''
  }

  render() {
    return (
      <form className="chatform container-vertical" onSubmit={this.handleSubmit}>
        <input type="text" ref="text" />
        <button type="submit" className="button primary">Submit</button>
      </form>
    )
  }
}
