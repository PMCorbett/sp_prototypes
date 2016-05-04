import React, { Component, PropTypes } from 'react';

class Conversation extends Component {
  sortedMessages() {
    return this.props.probe.messages;
  }

  getClassName(message) {
    const block = 'probe-conversation-message';
    return `${block} ${block}--${message.type}`;
  }

  render() {
    return (
      <div className="probe-conversation" >
        {this.sortedMessages().map(message =>
          <div className={this.getClassName(message)} >
            <div className="probe-conversation-message__from" >
              <img
                className="probe-conversation-message__avatar"
                src={message.avatar}
              />
              <div className="probe-conversation-message__author" >
                {message.author}
              </div>
            </div>
            <div className="probe-conversation-message__content" >
              {message.content}
            </div>
            <div className="probe-conversation-message__date" >
              {message.datetime}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Conversation.propTypes = {
};

export default Conversation;
