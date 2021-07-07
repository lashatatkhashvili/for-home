import React from 'react';
import styles from './CardFooter.module.scss';
import PropTypes from 'prop-types';

const CardFooter = props => {
  const { children, className, paddingSize, backgroundColor } = props;
  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className={`${styles.cardFooter} ${styles[paddingSize]} ${className}`} style={style}>
      {children}
    </div>
  );
};

CardFooter.defaultProps = {
  paddingSize: 'medium',
  backgroundColor: 'transparent',
};

CardFooter.propTypes = {
  className: PropTypes.string,
  paddingSize: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'extraLarge']),
  backgroundColor: PropTypes.string,
};

export default CardFooter;
