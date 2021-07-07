import React from 'react';

import styles from './Description.module.scss';

const Description = props => {
  const { className, name, address } = props;

  return (
    <div className={`${styles.currentBuildingCell} ${className}`}>
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
};

export default Description;
