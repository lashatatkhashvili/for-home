import React from 'react';
import styles from './NavigationTabs.module.scss';
import NavigationItem from './navigationItem/NavigationItem';
import PropTypes from 'prop-types';

const NavigationTabs = props => {
  const { children, className } = props;

  return <div className={`${styles.navigation} ${className}`}>{children}</div>;
};

NavigationTabs.Item = NavigationItem;

NavigationTabs.propTypes = {
  className: PropTypes.string,
};

export default NavigationTabs;
