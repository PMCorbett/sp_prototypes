import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import TaskNav from './TaskNav';
chai.use(chaiEnzyme());

describe('TaskNav', () => {
  const createTaskList = ({ taskName }) => (
    <TaskNav taskName={taskName} />
  );

  it('renders a link with no href to the current task', () => {
    const taskList = {
      taskName: 'Task'
    };
    const wrapper = mount(createTaskList(taskList));

    const link = wrapper.find('[data-role="link-task"]');
    expect(link).not.to.have.attr('href');
    expect(link).to.have.text(taskList.taskName);
  });
});
