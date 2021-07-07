import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.scss';

const Checkbox = props => {
  const { wrapperClassName, className, id, label, type, onClick, ...rest } = props;

  const handleCheckboxClick = event => {
    if (onClick) onClick(event);
  };

  return (
    <div className={wrapperClassName} onClick={handleCheckboxClick}>
      <input
        className={`${styles.checkbox} ${type ? styles[type] : null} ${className}`}
        type="checkbox"
        id={id}
        {...rest}
      />
      <label htmlFor={id}>{label && <span>{label}</span>}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  type: null,
};

Checkbox.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
};

export default Checkbox;
