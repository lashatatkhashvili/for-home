import React from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import classes from '../NewSurveyDialogStyle';
import SurveyQuestionTitle from '../survey-components/SurveyQuestionTitle';
import SurveyControls from '../survey-components/SurveyControls';
import ReactionControls from '../survey-components/ReactionControls';

const InputSurvey = props => {
  const {
    title,
    field,
    errors,
    survey,
    touched,
    classes,
    currentIndex,
    surveyLength,
    setFieldValue,
    handleRemoveSurvey,
    handleSurveyPositionChange,
  } = props;

  return (
    <Box p={3} pb={6} mb={4} className={classes.questionBox}>
      <Box mb={2} flex={1}>
        <SurveyQuestionTitle
          title={title}
          errors={errors}
          touched={touched}
          name={`${field}.name`}
          index={currentIndex + 1}
          onTitleChange={setFieldValue}
        />
      </Box>

      <Box mt={2} width="100%">
        <TextField
          value={''}
          size="small"
          variant="outlined"
          // placeholder="Placeholder"
          style={{ width: '100%', maxWidth: '757px' }}
          inputProps={{ style: { opacity: '0.8', fontSize: '14px' } }}
        />
      </Box>

      <SurveyControls
        handleSurveyPositionChange={handleSurveyPositionChange}
        handleRemoveSurvey={handleRemoveSurvey}
        currentIndex={currentIndex}
        surveyLength={surveyLength}
      />

      <ReactionControls setFieldValue={setFieldValue} isMandatory={survey.isMandatory} field={`${field}.isMandatory`} />
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(InputSurvey));
