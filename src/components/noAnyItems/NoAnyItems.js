import React from 'react';
import useStyles from './NoAnyItems.style';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';

const NoAnyItems = props => {
  const { text, image, imageClassName } = props;
  const classes = useStyles();

  return (
    <Box className={classes.noAnyItemWrapper}>
      <MaterialTypography className={classes.noAnyItemText} size="32px" weight={500}>
        {text}
      </MaterialTypography>

      <Box className={`${classes.noAnyItemImageWrapper} ${imageClassName}`}>
        <img src={image} alt="No Any Item" />
      </Box>
    </Box>
  );
};

NoAnyItems.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
  imageClassName: PropTypes.string,
};

export default NoAnyItems;
