import React, { Component, PropTypes } from 'react';

class ProbeStimulus extends Component {
  render() {
    const firstMessage = this.props.probe.messages[0];
    const messages = this.props.probe.messages;
    return (
      <div className="probe-stimulus" >
        <div className="probe-stimulus__from" >
          {firstMessage.author} sent you a question about one of your responses.
        </div>
        <div className="probe-stimulus__content" >
          {messages.map(message =>
            <div className="probe-stimulus-message" >
              {message.content}
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProbeStimulus.propTypes = {
};

export default ProbeStimulus;
