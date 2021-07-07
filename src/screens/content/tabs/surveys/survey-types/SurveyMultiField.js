import React, { useMemo } from 'react';

import classes from '../Survey.styles';
import { Box, withStyles } from '@material-ui/core';
import SurveyTitle from '../components/SurveyTitle';
import OptionsVoteStatistics from '../components/OptionsVoteStatistics';
import { SINGLE_SELECT } from '../../../../../constants/surveys';

const SurveyMultiField = ({ field, currentIndex, classes }) => {
  const totalVotes = useMemo(() => {
    if (field.type === SINGLE_SELECT) return field.participantsCount;

    let voteCount = 0;
    field.answers.forEach(({ value }) => {
      const valueCount = JSON.parse(value).length;
      voteCount += valueCount;
    });
    return voteCount;
  }, [field]);

  return (
    <Box p={3} mb={4} className={classes.surveyItem}>
      <SurveyTitle type={field.type} total={totalVotes} title={field.name} index={currentIndex} />

      <OptionsVoteStatistics options={field.options} total={totalVotes} />
    </Box>
  );
};

export default withStyles(classes)(SurveyMultiField);
