import React, { PropTypes } from 'react';

const TaskListNav = ({ path, projectName }) => (
  <li>
    <a href={path} data-role="link-task-list">
      <i className="icon icon_project"></i>
      <span className="inline">{projectName}</span>
      <div className="active_bar"></div>
    </a>
  </li>
);

TaskListNav.propTypes = {
  path: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired
};

export default TaskListNav;
