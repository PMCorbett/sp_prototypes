import React, { Component, PropTypes } from 'react';
import MessageStream from './MessageStream';

class MessageStyle extends Component {
  render() {
    return (
      <div className="probe-inbox probe-inbox--participant" >
        <div className="probe-inbox__current-probe" >
          <MessageStream {...this.props} />
        </div>
      </div>
    );
  }
}

MessageStyle.propTypes = {
};

export default MessageStyle;
