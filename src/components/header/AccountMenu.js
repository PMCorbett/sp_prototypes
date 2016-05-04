import React, { PropTypes } from 'react';
import Translate from 'Translate';
import menuClass from 'services/menuClass';

const AccountMenu = ({ participantId, menu: { menuIsOpen, toggleMenu } }) => (
  <ul className="nav pull-right user_account" data-role="toggle-account-menu">
    <li
      className={`${menuClass(menuIsOpen, 'dropdown')}`}
      data-role="menu-list-item"
    >
      <a
        className="dropdown-toggle"
        href="#"
        onClick={toggleMenu}
        data-role="menu-toggle"
      >
        <i className="icon icon_user" />
        <b className="caret" />
        <div className="active_bar" />
      </a>
      <ul className="dropdown-menu" role="menu" data-role="account-menu">
        <li><a href="/joins/new"><Translate id="account.join" /></a></li>
        <li>
          <a href={`/users/${participantId}/edit`}>
            <Translate id="account.edit" />
          </a>
        </li>
        <li><a href="/sign_out"><Translate id="signOut" /></a></li>
      </ul>
    </li>
  </ul>
);

AccountMenu.propTypes = {
  participantId: PropTypes.number.isRequired,
  menu: PropTypes.shape({
    menuIsOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  }).isRequired
};

export default AccountMenu;
