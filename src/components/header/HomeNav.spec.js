import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import injectTranslations from 'injectTranslations';
import HomeNav from './HomeNav';
chai.use(chaiEnzyme());

describe('HomeNav', () => {
  const createHomeNav = ({ translations }) => (
    injectTranslations(<HomeNav />, translations)
  );

  it('renders a link to the home page with translated text', () => {
    const translations = {
      home: 'stubbed home'
    };
    const wrapper = mount(createHomeNav({ translations }));

    const link = wrapper.find('[data-role="link-home"]');
    expect(link).to.have.text(translations.home);
  });
});
