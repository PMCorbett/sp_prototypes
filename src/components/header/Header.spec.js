import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Header from './Header';

import HomeNav from './HomeNav';
import Splitter from './Splitter';
import TaskListNav from './TaskListNav';
import TaskNav from './TaskNav';
import AccountMenu from './AccountMenu';

chai.use(chaiEnzyme());

describe('Header', () => {
  const createHeader = (
    taskList = {
      path: 'a/path/to/somwhere',
      projectName: 'Project',
      taskName: 'Task'
    },
    participantId = 1,
    menu = { menuIsOpen: false, toggleMenu: () => {} }
  ) => (
    <Header participantId={participantId} navigation={{ taskList }} menu={menu} />
  );

  it('renders a HomeNav component', () => {
    const wrapper = shallow(createHeader());
    expect(wrapper.find(HomeNav)).to.have.length.of(1);
  });

  it('renders 2 Splitter components to separate Home and Task List', () => {
    const wrapper = shallow(createHeader());
    expect(wrapper.find(Splitter)).to.have.length.of(2);
  });

  it('renders a TaskListNav component', () => {
    const wrapper = shallow(createHeader());
    expect(wrapper.find(TaskListNav)).to.have.length.of(1);
  });

  it('renders a TaskNav component', () => {
    const wrapper = shallow(createHeader());
    expect(wrapper.find(TaskNav)).to.have.length.of(1);
  });

  it('renders an AccountMenu component', () => {
    const wrapper = shallow(createHeader());
    expect(wrapper.find(AccountMenu)).to.have.length.of(1);
  });
});
