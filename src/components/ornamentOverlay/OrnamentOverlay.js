import React from 'react';
import useStyles from './OrnamentOverlay.style';
import PropTypes from 'prop-types';

const OrnamentOverlay = props => {
  const { className, image, imagePosition, fill, style: customStyle, children } = props;
  const classes = useStyles();
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: imagePosition,
    backgroundColor: fill,
  };
  return (
    <div className={`${classes.overlay} ${className}`} style={{ ...style, ...customStyle }}>
      {children}
    </div>
  );
};

OrnamentOverlay.defaultProps = {
  imagePosition: 'top left',
};

OrnamentOverlay.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  fill: PropTypes.string,
};

export default OrnamentOverlay;
