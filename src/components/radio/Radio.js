import React from 'react';
import styles from './Radio.module.scss';
import PropTypes from 'prop-types';

const Radio = props => {
  const { wrapperClassName, className, id, label, type, ...rest } = props;

  return (
    <div className={wrapperClassName}>
      <input className={`${styles.radio} ${className} ${styles[type]}`} type="radio" id={id} label="label" {...rest} />
      <label htmlFor={id}>{label && <span>{label}</span>}</label>
    </div>
  );
};

Radio.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Radio;
