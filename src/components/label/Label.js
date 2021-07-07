import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';

const Label = props => {
  const { children, className } = props;

  return <label className={`${styles.label} ${className}`}>{children}</label>;
};

Label.propsTypes = {
  className: PropTypes.string,
};

export default Label;
