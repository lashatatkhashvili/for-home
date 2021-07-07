import React from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import classes from '../Survey.styles';
import MaterialTypography from '../../../../../components/materialTypography/MaterialTypography';
const InputSurvey = ({ classes, t, currentIndex, field, onChange, value, error, disabled, ...rest }) => {
  return (
    <Box p={3} mb={2} className={`${classes.surveyItem} ${error ? 'surveyItemError' : ''}`}>
      <MaterialTypography className={classes.title}>
        {currentIndex}.{field.name}
      </MaterialTypography>
      <TextField
        disabled={disabled}
        size="small"
        variant="outlined"
        color={'secondary'}
        value={value}
        onChange={e => onChange(e.target.value, currentIndex - 1)}
        style={{ width: '100%', marginTop: 16 }}
        inputProps={{ style: { opacity: '0.8', fontSize: '14px', backgroundColor: disabled ? '#F2F2F2' : 'inherit' } }}
      />
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(InputSurvey));
