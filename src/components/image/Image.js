import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

const Image = forwardRef((props, ref) => {
  const { className, imageUrl, ...rest } = props;

  return <img ref={ref} className={`${styles.image} ${className}`} src={imageUrl} alt={imageUrl} {...rest} />;
});

Image.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Image;
