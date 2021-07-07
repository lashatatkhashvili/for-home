import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import classes from '../Survey.styles';
import SurveyTitle from '../components/SurveyTitle';
import MaterialButton from '../../../../../components/materialButton/MaterialButton';

const InputSurvey = ({ classes, t, currentIndex, field, showResults }) => {
  return (
    <Box p={3} mb={4} className={classes.surveyItem}>
      <SurveyTitle type={field.type} total={field.participantsCount} title={field.name} index={currentIndex} />

      <Box mt={4}>
        <MaterialButton onClick={showResults} className={classes.showBtn}>
          {t('Show Results')}
        </MaterialButton>
      </Box>
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(InputSurvey));
