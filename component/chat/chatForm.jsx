import React from 'react';

export default class ChatForm extends React.Component {
  render() {
    return (
      <div className="chatform container-vertical">
        <textarea></textarea>
        <button type="submit" className="button primary">Submit</button>
      </div>
    )
  }
}