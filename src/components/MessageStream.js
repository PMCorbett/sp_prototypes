import React, { Component, PropTypes } from 'react';
import Conversation from './Conversation';
import Reply from './Reply'

class MessageStream extends Component {
  render() {
    return (
      <div className="message-stream">
        <div className="message-stream__messages" >
          <Conversation {...this.props} />
        </div>
        <div className="message-stream__reply" >
          <Reply {...this.props} replyText="Reply" />
        </div>
      </div>
    );
  }
}

MessageStream.propTypes = {
};

export default MessageStream;
