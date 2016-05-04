import React, { Component, PropTypes } from 'react';
import MessageMenu from './MessageMenu';
import MessageStream from './MessageStream';

class Inbox extends Component {
  render() {
    return (
      <div className="probe-inbox" >
        <div className="probe-inbox__message-list" >
          <MessageMenu {...this.props} />
        </div>
        <div className="probe-inbox__current-probe" >
          <MessageStream {...this.props} />
        </div>
      </div>
    );
  }
}

Inbox.propTypes = {
};

export default Inbox;
