import React, { Component, PropTypes } from 'react';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list" >
        <div className="task-list__project" >
          <h3>Project</h3>
          <p>Little summary of the project</p>
        </div>
        <div className="task-list__tabs" >
          <div className="tab" >Main Tasks</div>
          <div className="tab" >Anytime Tasks</div>
        </div>
        <div className="task-list__tasks" >
          <div className="task-list-listing" >
            <div className="task-list-listing__item" >
              Task 1
            </div>
            <div className="task-list-listing__item" >
              Task 2
            </div>
            <div className="task-list-listing__item" >
              Task 3
            </div>
            <div className="task-list-listing__item" >
              Things about animals
            </div>
            <div className="task-list-listing__item" >
              Task 4
            </div>
            <div className="task-list-listing__item" >
              Task 5
            </div>
            <div className="task-list-listing__item" >
              Task 6
            </div>
            <div className="task-list-listing__item" >
              Task 7
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskList.propTypes = {
};

export default TaskList;
