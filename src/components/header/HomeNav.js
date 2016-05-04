import React from 'react';
import Translate from 'Translate';

const HomeNav = () => (
  <li>
    <a href="/" data-role="link-home">
      <i className="icon icon_home" />
      <Translate id="home">
        {value => <span className="inline">{value}</span>}
      </Translate>
      <div className="active_bar" />
    </a>
  </li>
);

export default HomeNav;
