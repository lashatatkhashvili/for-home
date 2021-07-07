import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const MaterialTypography = props => {
  const { children, size, align, weight, style: customStyles, ...rest } = props;

  const styles = {};
  if (size) {
    styles.fontSize = size;
  }
  if (weight) {
    styles.fontWeight = weight;
  }
  if (align) {
    styles.textAlign = align;
  }
  return (
    <Typography style={{...styles, ...customStyles}} {...rest}>
      {children}
    </Typography>
  );
};

MaterialTypography.propTypes = {
  size: PropTypes.string,
};

export default MaterialTypography;
