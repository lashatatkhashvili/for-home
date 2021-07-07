import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import * as Icons from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const ErrorMessageTooltip = props => {
  const { icon: IconComponent, title, inputValue } = props;
  return (
    <Tooltip title={title}>
      <Box display="flex" alignItems="center">
        <Box mr="5px" style={{ color: '#C6011B' }}>
          {inputValue}
        </Box>
        <IconComponent color="error" fontSize="small" />
      </Box>
    </Tooltip>
  );
};

ErrorMessageTooltip.defaultProps = {
  icon: Icons.PriorityHigh,
};

ErrorMessageTooltip.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  label: PropTypes.string,
};

export default ErrorMessageTooltip;
