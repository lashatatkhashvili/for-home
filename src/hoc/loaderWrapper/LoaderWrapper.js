import React from 'react';
import Loader from '../../components/Loader/Loader';
// import styles from './LoaderWrapper.module.scss';
import PropTypes from 'prop-types';
import useStyles from './LoaderWrapper.style';
import Box from '@material-ui/core/Box';

const LoaderWrapper = props => {
  const { children, isLoading, loaderType, style, className } = props;
  const classes = useStyles();

  return (
    <Box className={`${classes.loaderWrapper} ${className}`} style={isLoading ? style : null}>
      {isLoading ? (
        <Box className={classes.loader}>
          <Loader type={loaderType} />
        </Box>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
};

LoaderWrapper.propTypes = {
  loaderType: PropTypes.oneOf(['LightLoader', 'DarkLoader', 'GoldLoader']),
  isLoading: PropTypes.bool.isRequired,
  // children: PropTypes.element,
};

export default LoaderWrapper;
