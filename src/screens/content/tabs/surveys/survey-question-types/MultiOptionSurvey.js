import React from 'react';

import classes from '../Survey.styles';
import { Box, FormControlLabel, Radio, withStyles } from '@material-ui/core';
import MaterialTypography from '../../../../../components/materialTypography/MaterialTypography';
import Checkbox from '@material-ui/core/Checkbox';

const MultiOptionSurvey = ({
  field,
  currentIndex,
  classes,
  singleSelect,
  onChange,
  value,
  error,
  disabled,
  ...rest
}) => {
  const handleChange = (e, single = false) => {
    let val = Number(e.target.value);
    onChange(
      singleSelect ? [val] : value.includes(val) ? value.filter(id => id !== val) : [...value, val],
      currentIndex - 1
    );
  };
  return (
    <Box p={3} mb={2} className={`${classes.surveyItem} ${error ? 'surveyItemError' : ''}`}>
      <MaterialTypography className={classes.title} style={{ marginBottom: 16 }}>
        {currentIndex}.{field.name}
      </MaterialTypography>
      {field.options.map(opt => {
        return (
          <Box key={opt.id}>
            <FormControlLabel
              {...rest}
              classes={{
                label: classes.controlLabel,
              }}
              style={{ fontSize: 14 }}
              value={opt.id}
              control={
                singleSelect ? (
                  disabled ? (
                    <Box style={{ padding: 9 }}>
                      <svg width="24" height="24">
                        <circle cx="12" cy="12" r="9.583" fill="#F2F2F2" stroke="#969A9B" strokeWidth=".833" />
                      </svg>
                    </Box>
                  ) : (
                    <Radio
                      value={opt.id}
                      disabled={disabled}
                      checked={value && value.includes(opt.id) ? true : false}
                      onChange={e => handleChange(e, true)}
                    />
                  )
                ) : disabled ? (
                  <Box style={{ padding: 9 }}>
                    <svg width="24" height="24">
                      <rect
                        width="19"
                        height="19"
                        x="2.5"
                        y="2.5"
                        fill="#F2F2F2"
                        fillRule="evenodd"
                        stroke="#969A9B"
                        rx="4"
                      />
                    </svg>
                  </Box>
                ) : (
                  <Checkbox
                    value={opt.id}
                    disabled={disabled}
                    checked={value && value.includes(opt.id) ? true : false}
                    onChange={e => handleChange(e)}
                  />
                )
              }
              label={opt.name}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default withStyles(classes)(MultiOptionSurvey);
