import React, { Component, PropTypes } from 'react';

class ProbeAlert extends Component {
  render() {
    const { unreadProbes, probe } = this.props;

    if (unreadProbes === 0) {
      return (<div></div>);
    }
    return (
      <div className="probe-alert" >
        <div className="probe-alert-icon" >
          <img
            className="probe-alert-icon__image"
            src="https://www.nyse.com/publicdocs/images/Bell_Icon.png"
          />
          <span className="probe-alert-icon__count" >
            {unreadProbes}
          </span>
        </div>
        <div className="probe-alert__summary probe-summary" >
          <div className="probe-summary__note" >New Probe from</div>
          <div className="probe-summary__researcher" >{probe.researcher}</div>
          <div className="probe-summary__action" >
            <button>Reply</button>
          </div>
        </div>
      </div>
    );
  }
}

ProbeAlert.propTypes = {
};

export default ProbeAlert;
