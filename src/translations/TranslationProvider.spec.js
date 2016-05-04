import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import TranslationProvider from './TranslationProvider';
import Translate from 'Translate';
import { IntlProvider } from 'react-intl';
chai.use(chaiEnzyme());

describe('TranslationProvider', () => {
  it('provides access to translations to its children using react-intl', () => {
    const locale = {
      tag: 'en-US',
      language: 'en',
      translations: {}
    };
    const wrapper = shallow(
      <TranslationProvider locale={locale}>
        <p>Test</p>
      </TranslationProvider>
    );

    const provider = wrapper.find(IntlProvider);
    expect(provider).to.have.prop('locale', 'en-US');
    expect(wrapper).to.contain(<p>Test</p>);
  });

  it('works with different locales', () => {
    const locale = {
      tag: 'es-MX',
      language: 'es',
      translations: { 'account.edit': 'editar cuenta' }
    };
    const wrapper = mount(
      <TranslationProvider locale={locale}>
        <Translate id="account.edit" />
      </TranslationProvider>
    );

    const provider = wrapper.find(IntlProvider);
    expect(provider).to.have.prop('locale', 'es-MX');
    expect(wrapper).to.contain.text('editar cuenta');
  });
});
