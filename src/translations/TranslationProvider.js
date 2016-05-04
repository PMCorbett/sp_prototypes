import React, { Component, PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

// This class wraps the dependency on react-intl for translations.
// It must be a class-based component for context to be passed down without
// knowing too much about React internals.
/* eslint react/prefer-stateless-function: 0 */

// react-intl keeps all locales and regions within a file
// named after the language. For example, `es` contains the `es-MX` locale

const setLocaleData = (language) => {
  const localeData = require(`react-intl/locale-data/${language}`);
  addLocaleData(localeData);
};

class TranslationProvider extends Component {
  static propTypes = {
    locale: PropTypes.shape({
      tag: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      translations: PropTypes.object.isRequired
    }).isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    const { locale: { tag, language, translations }, ...props } = this.props;
    setLocaleData(language);
    return (
      <IntlProvider locale={tag} messages={translations} {...props } />
    );
  }
}

export default TranslationProvider;
