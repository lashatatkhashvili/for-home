import React from 'react';
import styles from './CardTitle.module.scss';
import PropTypes from 'prop-types';

const CardTitle = props => {
  const { children, className, size } = props;
  return <h2 className={`${styles.cardTitle} ${styles[size]} ${className}`}>{children}</h2>;
};

CardTitle.defaultProps = {
  size: 'small',
};

CardTitle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default CardTitle;
