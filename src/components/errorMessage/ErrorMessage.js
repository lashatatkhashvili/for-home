import React from 'react';
import styles from './ErrorMessage.module.scss';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const ErrorMessage = props => {
  const { children, className, ...rest } = props;

  // return <div className={`${styles.error} ${className}`}>{children}</div>;

  return (
    <FormHelperText className={`${styles.error} ${className}`} {...rest}>
      {children}
    </FormHelperText>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
};

export default ErrorMessage;
