import React from 'react';
import styles from './NavigationItem.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  const { children, active, className, ...rest } = props;

  return (
    <NavLink className={`${styles.item} ${className}`} activeClassName={styles.active} {...rest}>
      {children}
    </NavLink>
  );
};

NavigationItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default NavigationItem;
