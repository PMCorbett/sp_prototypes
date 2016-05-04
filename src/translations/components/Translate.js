import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

const Translate = ({ id, values, ...props }) => (
  <FormattedMessage id={id} values={values} {...props} />
);

Translate.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.object
};

export default Translate;
