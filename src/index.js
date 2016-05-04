import 'polyfills';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './base.css';
import './components/App.scss';

import TranslationProvider from 'translations/TranslationProvider';
import App from 'components/App';

const tProps = {
  locale: {
    tag: 'en-GB',
    language: 'en',
    translations: {
      'account.join': 'Join Project',
      'account.edit': 'Edit Account',
      'home': 'Home',
      'signOut': 'Sign out',
      'support': 'Support',
      'terms': 'Terms & Conditions',
      'meta.copyright': '© Copyright {agencies} {period}'
    }
  }
};

ReactDOM.render(
  <TranslationProvider {...tProps} >
    <App />
  </TranslationProvider>,
  document.querySelector('#root')
);
