import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import classes from '../NewSurveyDialogStyle';
import SurveyQuestionTitle from '../survey-components/SurveyQuestionTitle';
import SurveyControls from '../survey-components/SurveyControls';
import ReactionControls from '../survey-components/ReactionControls';
import ReactionEmojis from '../../../../../../../constants/reactionEmojis';

const ReactionsSurvey = props => {
  const {
    title,
    field,
    survey,
    errors,
    touched,
    classes,
    surveyLength,
    currentIndex,
    setFieldValue,
    handleRemoveSurvey,
    handleSurveyPositionChange,
  } = props;

  return (
    <Box p={3} mb={4} pb={6} className={classes.questionBox}>
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

      <Box display="flex" flexDirection="row" mt={5} className={classes.questionFixedAnswers}>
        {ReactionEmojis.map(Emoji => {
          return (
            <Box py={0.8} px={3.5} key={Emoji} display="flex" alignItems="center">
              <Emoji />
            </Box>
          );
        })}
      </Box>

      <SurveyControls
        currentIndex={currentIndex}
        surveyLength={surveyLength}
        handleRemoveSurvey={handleRemoveSurvey}
        handleSurveyPositionChange={handleSurveyPositionChange}
      />

      <ReactionControls
        isMeasurementIndicator
        setFieldValue={setFieldValue}
        field={`${field}.isMandatory`}
        isMandatory={survey.isMandatory}
      />
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(ReactionsSurvey));
