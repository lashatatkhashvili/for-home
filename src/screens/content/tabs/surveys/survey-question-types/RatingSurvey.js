import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import ReactionEmojis from '../../../../../constants/reactionEmojis';
import classes from '../Survey.styles';
import MaterialTypography from '../../../../../components/materialTypography/MaterialTypography';

const RatingSurvey = ({ field, currentIndex, classes, onChange, reactions, value, error, disabled, ...rest }) => {
  return (
    <Box p={3} mb={2} className={`${classes.surveyItem} ${error ? 'surveyItemError' : ''}`}>
      <MaterialTypography className={classes.title}>
        {currentIndex}.{field.name}
      </MaterialTypography>
      <Box display="flex" flexDirection="row" mt={2} className={classes.questionFixedAnswers}>
        {field.options.map((opt, index) => {
          return (
            <Box
              key={opt.id}
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent={'center'}
              p={reactions ? 1 : 0.8}
              onClick={() => {
                return disabled ? false : onChange([opt.id], currentIndex - 1);
              }}
              className={value && value.includes(opt.id) ? 'active' : ''}
              style={{ backgroundColor: disabled ? '#F2F2F2' : 'inherit' }}
              {...rest}
            >
              {reactions ? (
                <Box>{ReactionEmojis[index]}</Box>
              ) : (
                <MaterialTypography
                  style={{ width: '50px', textAlign: 'center', fontSize: '14px', lineHeight: '24px' }}
                >
                  {opt.name}
                </MaterialTypography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default withStyles(classes)(RatingSurvey);
