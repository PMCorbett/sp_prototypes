import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import injectTranslations from 'injectTranslations';
import Translate from './Translate';
chai.use(chaiEnzyme());

describe('Translate', () => {
  const createComponent = ({ props, translations = undefined } = {}) => (
    injectTranslations(<Translate {...props} />, translations)
  );

  it('returns a translation for the given id', () => {
    const translations = {
      test: 'testing'
    };
    const wrapper = mount(createComponent({
      props: { id: 'test' },
      translations
    }));

    expect(wrapper).to.have.text('testing');
  });

  it('allows values to be interpolated', () => {
    const translations = {
      test: 'testing {value}'
    };
    const wrapper = mount(createComponent({
      props: { id: 'test', values: { value: 'interpolated value' } },
      translations
    }));

    expect(wrapper).to.have.text('testing interpolated value');
  });

  it('passes down all other props', () => {
    const translations = {
      test: 'testing'
    };
    const component = injectTranslations(
      <Translate id="test">
        {value => <span className="test">{value}</span>}
      </Translate>,
      translations
    );
    const wrapper = mount(component);

    expect(wrapper.find('span')).to.have.className('test');
  });
});
