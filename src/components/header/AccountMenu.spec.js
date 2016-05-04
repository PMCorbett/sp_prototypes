import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiSpies from 'chai-spies';
import { mount } from 'enzyme';
import injectTranslations from 'injectTranslations';
import AccountMenu from './AccountMenu';
chai.use(chaiEnzyme());
chai.use(chaiSpies);

describe('AccountMenu', () => {
  const createComponent = ({
    participantId = 1,
    menuIsOpen = false,
    toggleMenu = () => {},
    translations = undefined
  } = {}) => (
    injectTranslations(
      <AccountMenu participantId={participantId} menu={{ menuIsOpen, toggleMenu }} />,
      translations
    )
  );

  it('renders a user menu', () => {
    const participantId = 1111;
    const wrapper = mount(createComponent({ participantId }));

    const menuToggle = wrapper.find('[data-role="toggle-account-menu"]');
    const menu = wrapper.find('[data-role="account-menu"]');
    const editUserLink = menu.find('a').at(1);
    const icon = menuToggle.find('i').first();
    expect(icon).to.have.className('icon_user');
    expect(editUserLink).to.have.attr('href', `/users/${participantId}/edit`);
  });

  it('translates the list items', () => {
    const translations = {
      'account.join': 'stubbed account.join',
      'account.edit': 'stubbed account.edit',
      signOut: 'stubbed signOut'
    };
    const wrapper = mount(createComponent({ translations }));

    const menu = wrapper.find('[data-role="account-menu"]');
    const failureMessage = 'Translate component is missing';
    expect(menu, failureMessage).to.include.text(translations['account.join']);
    expect(menu, failureMessage).to.include.text(translations['account.edit']);
    expect(menu, failureMessage).to.include.text(translations.signOut);
  });

  context('when the dropdown toggle is clicked', () => {
    it('calls the toggleMenu function', () => {
      const toggleSpy = chai.spy();
      const wrapper = mount(createComponent({ toggleMenu: toggleSpy }));
      const dropdownToggle = wrapper.find('.dropdown-toggle');

      dropdownToggle.simulate('click');

      expect(toggleSpy).to.have.been.called();
    });
  });
});
