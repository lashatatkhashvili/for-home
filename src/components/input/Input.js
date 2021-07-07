import React from 'react';

import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Input = props => {
  const { className, wrapperClassName, id, error, style, autoComplete, ...rest } = props;

  return (
    <div className={`${styles.inputWrapper} ${wrapperClassName}`} style={style}>
      <input className={styles[className]} id={id} {...rest} autoComplete={!autoComplete && 'new-password'} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

Input.defaultProps = {
  className: 'standardInput',
  type: 'text',
  autoComplete: false,
};

Input.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  id: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
