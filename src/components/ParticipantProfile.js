import React, { Component, PropTypes } from 'react';
import StartProbe from './StartProbe';

class ParticipantProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { showProbe: false };
    this.toggleProbe = this.toggleProbe.bind(this);
  }

  toggleProbe() {
    this.setState({ showProbe: !this.state.showProbe });
  }

  render() {
    return (
      <div className="participant-profile">
        <div className="participant-profile__menu" >
          <h3>Profile</h3>
          <p>About Me</p>
          <h3>Tasks</h3>
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
          <p>Things about animals</p>
          <p>Task 5</p>
          <p>Task 6</p>
          <p>Task 7</p>
        </div>
        <div className="participant-profile__content" >
          <div className="participant-profile__header" >
            <h2>Jane Fonda</h2>
            <hr />
            <h2>Things about animals</h2>
            <hr />
          </div>
          <div className="participant-profile__responses" >
            <h3>1, 2, 3, 4, 5</h3>
            <h4>3 - Completed Tuesday 26th April 2016 4:35pm UTC  18 seconds</h4>

            <div className="response-probe" >
              <button onClick={this.toggleProbe} >
                Probe This Response
              </button>
              {this.state.showProbe && <StartProbe toggleProbe={this.toggleProbe} {...this.props} />}
            </div>
            <div className="response-grid" >
              <div className="response-grid__cell" >
                <ul>
                  <li>Its a badger</li>
                  <li>Its a mushroom</li>
                </ul>
              </div>
              <div className="response-grid__cell" >
                <ul>
                  <li>I like turtles</li>
                  <li>I hate things that aren't turtles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

ParticipantProfile.propTypes = {
};

export default ParticipantProfile;
