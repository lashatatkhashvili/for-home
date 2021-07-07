import React from 'react';

import styles from './Backdrop.module.scss';
import PropTypes from 'prop-types';

const Backdrop = props => {
  const handleClick = () => {
    const { onClick } = props;
    if (onClick) onClick();
  };

  return <div className={styles.backdrop} onClick={handleClick} />;
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
