import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './MaterialButton.style';
import PropTypes from 'prop-types';

const MaterialButton = props => {
  const { children, rounded, ...rest } = props;
  const classes = useStyles(props);

  return (
    <Button classes={classes} {...rest}>
      {children}
    </Button>
  );
};

MaterialButton.defaultProps = {
  rounded: false,
};

MaterialButton.propTypes = {
  rounded: PropTypes.bool,
};

export default MaterialButton;
