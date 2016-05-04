import React, { PropTypes } from 'react';

const TaskNav = ({ taskName }) => (
  <li>
    <a className="active" data-role="link-task">
      <i className="icon icon_task"></i>
      <span className="inline">{taskName}</span>
      <div className="active_bar"></div>
    </a>
  </li>
);

TaskNav.propTypes = {
  taskName: PropTypes.string.isRequired
};

export default TaskNav;
