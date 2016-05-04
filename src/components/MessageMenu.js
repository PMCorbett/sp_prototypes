import React, { Component, PropTypes } from 'react';

class MessageMenu extends Component {
  render() {
    const { probes } = this.props;
    return (
      <div className="message-menu" >
      {probes.map(probe =>
        <div className="message-menu-item" >
          <div className="message-menu-item__recipient" >{probe.recipient}</div>
          <div className="message-menu-item__subject" >{probe.subject}</div>
          <div className="message-menu-item__date" >{probe.datetime}</div>
        </div>
      )}
      </div>
    );
  }
}

MessageMenu.propTypes = {
};

export default MessageMenu;
