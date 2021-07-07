import React from 'react';
import styles from './CardBody.module.scss';
import PropTypes from 'prop-types';

const CardBody = props => {
  const { children, className, paddingSize, backgroundColor } = props;
  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className={`${styles.cardBody} ${styles[paddingSize]} ${className}`} style={style}>
      {children}
    </div>
  );
};

CardBody.defaultProps = {
  paddingSize: 'medium',
  backgroundColor: 'transparent',
};

CardBody.propTypes = {
  className: PropTypes.string,
  paddingSize: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'extraLarge']),
  backgroundColor: PropTypes.string,
};

export default CardBody;
