import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const injectTranslationHelpers = () => (Wrapped) => {
  const InjectTranslationHelpers = ({ intl, ...props }) => (
    <Wrapped translate={intl.formatMessage} {...props} />
  );

  InjectTranslationHelpers.propTypes = {
    intl: intlShape.isRequired
  };

  return injectIntl(InjectTranslationHelpers);
};


export default injectTranslationHelpers;
