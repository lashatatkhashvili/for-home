import React from 'react';

import styles from './Badge.module.scss';

const Badge = props => {
  const { label, text, onClick } = props;

  return (
    <div className={styles.badge} onClick={onClick}>
      <span>{label}</span> {text}
    </div>
  );
};

export default Badge;
