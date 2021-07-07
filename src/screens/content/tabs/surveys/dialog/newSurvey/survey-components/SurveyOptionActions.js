import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

const SurveyOptionActions = ({ handleOptionPositionChange, optionCurrentIndex, removeSurveyOption, optionsLength }) => {
  return (
    <Box>
      {optionCurrentIndex - 1 >= 0 && (
        <IconButton
          onClick={() => handleOptionPositionChange(optionCurrentIndex, 'up')}
          size="small"
          style={{ marginLeft: '5px', opacity: '0.8', transform: 'rotate(-90deg)' }}
        >
          <Icons.ChevronRight fontSize="inherit" />
        </IconButton>
      )}
      {optionCurrentIndex + 1 < optionsLength && (
        <IconButton
          onClick={() => handleOptionPositionChange(optionCurrentIndex, 'down')}
          size="small"
          style={{ marginLeft: '5px', opacity: '0.8', transform: 'rotate(90deg)' }}
        >
          <Icons.ChevronRight fontSize="inherit" />
        </IconButton>
      )}
      {optionsLength > 1 && (
        <IconButton
          onClick={() => removeSurveyOption(optionCurrentIndex)}
          size="small"
          style={{ marginLeft: '5px', opacity: '0.8' }}
        >
          <Icons.DeleteOutline fontSize="inherit" />
        </IconButton>
      )}
    </Box>
  );
};

export default SurveyOptionActions;
