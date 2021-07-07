import React from 'react';
import styles from './CardHeader.module.scss';
import PropTypes from 'prop-types';

const CardHeader = props => {
  const { children, className, paddingSize } = props;
  return <div className={`${styles.cardHeader} ${styles[paddingSize]} ${className}`}>{children}</div>;
};

CardHeader.defaultProps = {
  paddingSize: 'medium',
};

CardHeader.propTypes = {
  className: PropTypes.string,
  paddingSize: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'extraLarge']),
};

export default CardHeader;
