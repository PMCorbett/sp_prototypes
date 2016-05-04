import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import TaskListNav from './TaskListNav';
chai.use(chaiEnzyme());

describe('TaskListNav', () => {
  const createTaskListNav = ({ path, projectName }) => (
    <TaskListNav path={path} projectName={projectName} />
  );

  it('renders a link to the task list', () => {
    const taskList = {
      path: 'a/path/to/somewhere',
      projectName: 'Project'
    };
    const wrapper = mount(createTaskListNav(taskList));

    const link = wrapper.find('[data-role="link-task-list"]');
    expect(link).to.have.attr('href', taskList.path);
    expect(link).to.have.text(taskList.projectName);
  });
});
