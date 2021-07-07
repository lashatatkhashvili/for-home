import React, { useCallback, useState } from 'react';
import { Box, TextField, withStyles, IconButton } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import * as Icons from '@material-ui/icons';

import classes from '../NewSurveyDialogStyle';
import SurveyQuestionTitle from '../survey-components/SurveyQuestionTitle';
import SurveyControls from '../survey-components/SurveyControls';
import MaterialTypography from '../../../../../../../components/materialTypography/MaterialTypography';
import ReactionControls from '../survey-components/ReactionControls';

const RatingSurvey = ({
  t,
  title,
  field,
  survey,
  errors,
  touched,
  classes,
  options,
  surveyLength,
  currentIndex,
  setFieldValue,
  handleRemoveSurvey,
  handleSurveyPositionChange,
}) => {
  const [fieldCount, setFieldCount] = useState(() => options.length);

  const modifiedOptions = useCallback((method, options) => {
    let newOptions = options.length ? [...options] : [];
    const objToAdd = { name: '1' };
    if (newOptions.length) {
      const lastItemValue = +newOptions[newOptions.length - 1].name;
      objToAdd.name = lastItemValue + 1;
    }
    if (method === 'increase') {
      if (newOptions.length >= 10) return;
      newOptions = newOptions.concat(objToAdd);
    } else if (method === 'decrease') {
      if (newOptions.length <= 2) return;
      newOptions.pop();
    }
    return newOptions;
  }, []);

  const handleFieldCountChange = useCallback(
    event => {
      const { value } = event.target;
      const parsedValue = value && value !== '' ? +value.replace(/\D/g, '') : 0;

      const diff = Math.abs(parsedValue - options.length);
      const method = parsedValue > options.length ? 'increase' : 'decrease';
      if (parsedValue >= 2 && parsedValue <= 10) {
        let newOptions = [...options];
        for (let i = 0; i < diff; i++) {
          newOptions = modifiedOptions(method, newOptions);
        }
        setFieldValue(`${field}.options`, newOptions);
      }

      setFieldCount(value.replace(/\D/g, ''));
    },
    [fieldCount, setFieldValue, options, setFieldValue]
  );

  const handleOptionChange = useCallback(
    (method = 'decrease') => {
      const count = method === 'increase' ? +fieldCount + 1 : +fieldCount - 1;
      if ((+fieldCount <= 2 && method === 'decrease') || (+fieldCount >= 10 && method === 'increase')) return;
      if ((+count < 2 && method === 'increase') || (+count > 10 && method === 'decrease')) {
        return setFieldCount(count);
      }
      handleFieldCountChange({ target: { value: `${count}` } });
      setFieldCount(count);
    },
    [options, setFieldValue, field, fieldCount, handleFieldCountChange]
  );

  return (
    <Box p={3} pb={12} mb={4} className={classes.questionBox}>
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

      <Box display="flex" flexDirection="row" mt="10px" className={classes.questionFixedAnswers}>
        {options &&
          options.map((item, optIndex) => {
            return (
              <Box py={0.8} px={3} key={`${item.name}${optIndex}`} display="flex" alignItems="center">
                <MaterialTypography style={{ width: '50px', textAlign: 'center', fontSize: '14px' }}>
                  {item.name}
                </MaterialTypography>
              </Box>
            );
          })}
      </Box>
      <ReactionControls setFieldValue={setFieldValue} isMandatory={survey.isMandatory} field={`${field}.isMandatory`}>
        <Box display="flex" alignItems="center" mt="12px" mb="4px" pl="4px">
          <MaterialTypography size="inherit">{t('Number of fields')}</MaterialTypography>
          <Box display="flex" ml={2}>
            <IconButton
              onClick={() => handleOptionChange('decrease')}
              size="small"
              color="#678189"
              style={{ transform: 'rotate(180deg)' }}
            >
              <Icons.ChevronRight />
            </IconButton>

            <TextField
              placeholder="Input"
              size="small"
              value={fieldCount}
              onChange={handleFieldCountChange}
              inputProps={{ style: { fontSize: '14px', textAlign: 'center' } }}
              style={{ width: '50px' }}
            />

            <IconButton onClick={() => handleOptionChange('increase')} size="small" color="#678189">
              <Icons.ChevronRight />
            </IconButton>
          </Box>
        </Box>
      </ReactionControls>

      <SurveyControls
        handleSurveyPositionChange={handleSurveyPositionChange}
        handleRemoveSurvey={handleRemoveSurvey}
        currentIndex={currentIndex}
        surveyLength={surveyLength}
      />
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(RatingSurvey));
