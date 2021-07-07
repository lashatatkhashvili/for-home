import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = props => {
  const { src, className, ...rest } = props;

  const style = {
    backgroundImage: `url(${src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return <div style={style} className={className} {...rest}></div>;
};

BackgroundImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default BackgroundImage;
