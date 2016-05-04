import React, { PropTypes } from 'react';
import HomeNav from './HomeNav';
import Splitter from './Splitter';
import TaskListNav from './TaskListNav';
import TaskNav from './TaskNav';
import AccountMenu from './AccountMenu';
import ProbeAlert from 'components/ProbeAlert';
import './Header.scss';

const Header = ({ participantId, navigation, menu, unreadProbes, type, probe }) => (
  <nav className="header-navigation" id="nav-wrapper">
    <div id="nav">
      <div className="navbar_wrapper" data-role="navbar">
        <div className="navbar nav-static container">
          <div className="nav breadcrumbs">
            <HomeNav />
            <Splitter />
            <TaskListNav
              path={navigation.taskList.path}
              projectName={navigation.taskList.projectName}
            />
            <Splitter />
            <TaskNav taskName={navigation.taskList.taskName} />
          </div>
          <ProbeAlert unreadProbes={unreadProbes} type={type} probe={probe} />
          <AccountMenu participantId={participantId} menu={menu} />
        </div>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  participantId: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    taskList: PropTypes.shape({
      path: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      taskName: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  menu: PropTypes.shape({
    menuIsOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  }).isRequired
};

export default Header;
