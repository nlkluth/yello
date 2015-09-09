'use strict';

import React from 'react';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var text = React.findDOMNode(this.refs.text);
    this.props.dispatch();
    text.value = '';
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
