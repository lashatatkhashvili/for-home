import React from 'react';
import { Box, IconButton, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

import classes from '../NewSurveyDialogStyle';
import { withTranslation } from 'react-i18next';
import { TrashWv } from '../../../../../../../components/icons/Icons';

const SurveyControls = props => {
  const { classes, handleSurveyPositionChange, handleRemoveSurvey, currentIndex, surveyLength } = props;

  return (
    <Box className={classes.questionControls}>
      {currentIndex - 1 >= 0 && (
        <IconButton
          size="medium"
          color="#678189"
          className={classes.questionControlButton}
          style={{ transform: 'rotate(-90deg)' }}
          onClick={() => handleSurveyPositionChange(currentIndex, 'up')}
        >
          <Icons.ChevronRight />
        </IconButton>
      )}
      {currentIndex + 1 < surveyLength && (
        <IconButton
          size="medium"
          color="#678189"
          className={classes.questionControlButton}
          style={{ transform: 'rotate(90deg)' }}
          onClick={() => handleSurveyPositionChange(currentIndex, 'down')}
        >
          <Icons.ChevronRight />
        </IconButton>
      )}

      <IconButton
        size="medium"
        color="#678189"
        className={classes.questionControlButton}
        onClick={() => handleRemoveSurvey(currentIndex)}
      >
        <TrashWv />
      </IconButton>
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(SurveyControls));
