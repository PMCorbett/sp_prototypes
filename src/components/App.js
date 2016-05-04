import React, { Component, PropTypes } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Inbox from 'components/Inbox';
import MessageStyle from 'components/MessageStyle';
import QuestionStyle from 'components/QuestionStyle';
import ParticipantProfile from 'components/ParticipantProfile';
import TaskList from 'components/TaskList';

import fixtures from './probes.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      probe: fixtures.probe,
      component: 'Inbox',
      unreadProbes: 0,
      type: 'researcher'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.pickComponent = this.pickComponent.bind(this);
  }

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  hideMenu() {
    if (this.state.menuIsOpen) {
      this.toggleMenu();
    }
  }

  addMessage(content) {
    const datetime = new Date().toString();
    const avatar = 'http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png';
    const type = this.state.type;
    const author = this.state.type === 'researcher' ? 'Jerry Gergich' : 'Jane Fonda';
    const message = {
      author, datetime, content, avatar, type
    };
    const probe = this.state.probe;
    probe.messages.push(message);
    this.setState({ probe });
  }

  setComponent(component) {
    let type = 'researcher';
    let unreadProbes = 0;
    switch (component) {
      case 'Inbox':
        break;
      case 'ParticipantProfile':
        break;
      case 'TaskList':
        unreadProbes = 1;
        type = 'participant';
        break;
      case 'MessageStyle':
        type = 'participant';
        break;
      case 'QuestionStyle':
        type = 'participant';
        break;
      default:
        type = 'researcher';
    }
    this.setState({ component, type, unreadProbes });
  }

  pickComponent() {
    switch (this.state.component) {
      case 'Inbox':
        return (
          <Inbox
            probes={fixtures.probes}
            probe={this.state.probe}
            addMessage={this.addMessage}
          />
        );
      case 'ParticipantProfile':
        return <ParticipantProfile />;
      case 'TaskList':
        return <TaskList />;
      case 'MessageStyle':
        return (
          <MessageStyle
            probe={this.state.probe}
            addMessage={this.addMessage}
          />
        );
      case 'QuestionStyle':
        return (
          <QuestionStyle
            probe={this.state.probe}
            addMessage={this.addMessage}
          />
        );
      default:
        return <ParticipantProfile />;
    }
  }

  componentNotes(component) {
    switch (component) {
      case 'Inbox':
        return '3.4 Jerry must read the probe reply to inform the research & identify if a follow-up probe is required';
      case 'ParticipantProfile':
        return '3.2 Jerry must be able to send a probe to Jane about a response to engage Jane';
      case 'TaskList':
        return '5.6 Jane must know that he/she has been probed so she can reply (and provide further insight)';
      case 'MessageStyle':
        return '5.4 Jane responds to Jerry\'s probe to provide more insight';
      case 'QuestionStyle':
        return '5.4 Jane responds to Jerry\'s probe to provide more insight - Alternate to our working design, supposed to feel more like the interview questions, rather than a chat.';
      default:
        return 'I do not know';
    }
  }

  renderButton(text, componentName) {
    return (
      <button
        onClick={this.setComponent.bind(this, componentName)}
        className={this.state.component === componentName ? 'active' : 'not'}
      >
        {text}
        <div className="button-tool" >
          {this.componentNotes(componentName)}
        </div>
      </button>
    );
  }

  render() {
    const { participant, navigation } = fixtures;
    const { menuIsOpen } = this.state;
    return (
      <div
        data-react-available="true"
        className="opinion-container"
        onClick={this.hideMenu}
      >
        <Header
          participantId={participant.id}
          navigation={navigation}
          menu={{ menuIsOpen, toggleMenu: this.toggleMenu }}
          unreadProbes={this.state.unreadProbes}
          probe={this.state.probe}
          type={this.state.type}
        />
        <div className="opinion-content" >
          {this.pickComponent()}
        </div>
        <div className="changer" >
          <div className="changer-role" >
            <div className="changer-role__header">Jerry (Dashboard)</div>
            <div className="changer-role__actions" >
              {this.renderButton('Inbox', 'Inbox')}
              {this.renderButton("A Participant's Profile", 'ParticipantProfile')}
            </div>
          </div>
          <div className="changer__role" >
            <div className="changer-role__header">Jane (Discussion)</div>
            <div className="changer-role__actions" >
              {this.renderButton('Task List', 'TaskList')}
              {this.renderButton('Message Style Probe', 'MessageStyle')}
              {this.renderButton('Question Style Probe', 'QuestionStyle')}
            </div>
          </div>
        </div>
        <Footer navigation={navigation} />
      </div>
    );
  }
}

App.propTypes = {
  participant: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    taskList: PropTypes.shape({
      path: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      taskName: PropTypes.string.isRequired
    }),
    metadata: PropTypes.shape({
      support_email: PropTypes.string.isRequired,
      website_link_text: PropTypes.string.isRequired,
      website_url: PropTypes.string,
      copyright_agencies: PropTypes.string.isRequired,
      copyright_period: PropTypes.string.isRequired
    })
  })
};

export default App;
