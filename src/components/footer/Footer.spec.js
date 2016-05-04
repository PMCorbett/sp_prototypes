import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import injectTranslations from 'injectTranslations';
import Footer from './Footer';
chai.use(chaiEnzyme());

describe('Footer', () => {
  const createFooter = ({ metadata, translations = undefined }) => (
    injectTranslations(<Footer navigation={{ metadata }} />, translations)
  );

  const getMetadata = () => (
    {
      support_email: 'default email',
      website_link_text: 'default link text',
      website_url: 'http://www.default.com',
      copyright_agencies: 'default agency',
      copyright_period: 'default copyright period'
    }
  )

  const getTranslations = () => (
    {
      support: 'default support',
      terms: 'default terms',
      'meta.copyright': 'default copyright'
    }
  )

  const assertText = (element, text) => (
    expect(element).to.have.text(text)
  )

  const assertLink = (element, { href, text }) => {
    expect(element).to.have.attr('href', href);
    assertText(element, text);
  }

  it('renders the links', () => {
    const metadata = {
      ...getMetadata(),
      support_email: 'email@example.com',
      website_link_text: 'Example Ltd',
      website_url: 'http://www.example.com'
    };
    const translations = {
      ...getTranslations(),
      support: 'stubbed support',
      terms: 'stubbed terms'
    }
    const wrapper = mount(createFooter({ metadata, translations }));

    const support = wrapper.find('[data-role="link-support"]')
    const terms = wrapper.find('[data-role="link-terms"]')
    const website = wrapper.find('[data-role="link-website"]')
    assertLink(support, {
      href: 'mailto:email@example.com',
      text: 'stubbed support'
    });
    assertLink(terms, {
      href: '/terms',
      text: 'stubbed terms'
    });
    assertLink(website, {
      href: 'http://www.example.com',
      text: 'Example Ltd'
    });
  });

  it('renders the copyright information', () => {
    const metadata = {
      ...getMetadata(),
      copyright_agencies: 'Example Agency',
      copyright_period: '2016-2017'
    };
    const translations = {
      ...getTranslations(),
      'meta.copyright': "stubbed copyright {agencies} {period}"
    }
    const wrapper = mount(createFooter({ metadata, translations }));

    const copyright = wrapper.find('[data-role="footer-copyright"]');
    assertText(copyright, 'stubbed copyright Example Agency 2016-2017');
  });
});
