import React, { useMemo } from 'react';
import { Box, withStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import classes from '../Survey.styles';
import SurveyTitle from '../components/SurveyTitle';
import MaterialButton from '../../../../../components/materialButton/MaterialButton';
import FieldProgress from '../components/FieldProgress';
import { StarWv } from '../../../../../components/icons/Icons';
import { RATING, REACTIONS } from '../../../../../constants/surveys';
import { percentageKeyGenerator } from '../../../../../utils/helpers';
import { emojiTypesByPercentage } from '../../../../../constants/reactionEmojis';

const SurveyRatingField = ({ field, currentIndex, showResults, classes }) => {
  const { t } = useTranslation();

  const percentage = useMemo(() => {
    const {
      average,
      options: { length },
    } = field;
    let percentage = average;

    if (field.type === REACTIONS) {
      // multiplying by 2 because reactions average is from 1 to 5
      percentage *= 20;
    } else {
      // dividing by options length because reactions field options are dynamic
      // we can get the max value of the reactions by its' options length
      percentage /= length;
      percentage *= 100;
    }

    return percentage;
  }, [field.average]);

  const EmojiToDisplay = useMemo(() => {
    const key = percentageKeyGenerator(percentage);

    return emojiTypesByPercentage[key];
  }, [percentage]);

  return (
    <Box p={3} mb={4} className={classes.surveyItem}>
      <SurveyTitle type={field.type} total={field.participantsCount} title={field.name} index={currentIndex} />

      <Box mt={2} mb={3}>
        <FieldProgress
          iconComponent={field.type === RATING ? StarWv : EmojiToDisplay}
          text={field.type === RATING ? parseInt(field.average * 100) / 100 : 'on'}
          percentage={percentage}
        />
      </Box>

      <MaterialButton onClick={showResults} className={classes.showBtn}>
        {t('Show Results')}
      </MaterialButton>
    </Box>
  );
};

export default withStyles(classes)(SurveyRatingField);
