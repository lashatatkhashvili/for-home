import React from 'react';
import bookmarkOffIcon from '../../assets/images/icons/bookmarkOff.svg';
import bookmarkOnIcon from '../../assets/images/icons/bookmarkOn.svg';
import PropTypes from 'prop-types';

const Bookmark = props => {
  const { isActive, width, height, onToggle, ...rest } = props;
  const handleClick = () => {
    if (onToggle) onToggle(!isActive);
  };
  return (
    <img
      src={isActive ? bookmarkOnIcon : bookmarkOffIcon}
      width={width}
      height={height}
      onClick={handleClick}
      {...rest}
    />
  );
};

Bookmark.defaultProps = {
  isActive: false,
  width: 30,
  height: 30,
};

Bookmark.propTypes = {
  isActive: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onToggle: PropTypes.func,
};

export default Bookmark;
