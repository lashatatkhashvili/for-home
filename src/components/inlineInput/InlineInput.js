import React, { Component } from 'react';
import styles from './InlineInput.module.scss';
import PropTypes from 'prop-types';

const InlineInput = props => {
  const { id, label, children, wrapperClassName } = props;

  return (
    <div className={`${styles.inlineInputWrapper} ${wrapperClassName}`}>
      <label className={styles.inlineLabel} htmlFor={id}>
        {label}
      </label>
      <div>{children}</div>
    </div>
  );
};

InlineInput.propTypes = {
  wrapperClassName: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default InlineInput;
