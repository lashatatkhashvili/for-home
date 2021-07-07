import React, { useState, useCallback } from 'react';
import { Box, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import classes from '../NewSurveyDialogStyle';
import SurveyQuestionTitle from '../survey-components/SurveyQuestionTitle';
import MaterialTypography from '../../../../../../../components/materialTypography/MaterialTypography';
import SurveyOptionActions from '../survey-components/SurveyOptionActions';
import { moveItemInArray } from '../../../../../../../utils/helpers';
import { useMemo } from 'react';
import { SINGLE_SELECT } from '../../../../../../../constants/surveys';
import SurveyControls from '../survey-components/SurveyControls';
import MaterialButton from '../../../../../../../components/materialButton/MaterialButton';
import { PlusWv, RadioWv, CheckboxWv } from '../../../../../../../components/icons/Icons';
import ReactionControls from '../survey-components/ReactionControls';

const surveyDefaultOptionObject = { name: '' };

const MultiOptionSurvey = props => {
  const {
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
    componentType,
    setFieldValue,
    handleRemoveSurvey,
    handleSurveyPositionChange,
  } = props;
  const Component = useMemo(() => {
    return componentType === SINGLE_SELECT ? RadioWv : CheckboxWv;
  }, [componentType]);

  const handleOptionPositionChange = useCallback(
    (index, direction) => {
      const changedOptions = moveItemInArray(options, index, direction);
      setFieldValue(`${field}.options`, changedOptions);
    },
    [options, setFieldValue]
  );

  const handleAddSurveyOption = useCallback(() => {
    const newOptions = [...options, { ...surveyDefaultOptionObject }];

    setFieldValue(`${field}.options`, newOptions);
  }, [options, setFieldValue]);

  const handleRemoveSurveyOption = useCallback(
    deleteIndex => {
      if (options.length <= 1) return;
      const newOptions = options.filter((opt, optionIndex) => deleteIndex !== optionIndex);
      setFieldValue(`${field}.options`, newOptions);
    },
    [options, setFieldValue]
  );

  return (
    <Box p={3} mb={4} className={classes.questionBox}>
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

      <Box display="flex" flexDirection="column">
        {options.map((item, index) => {
          return (
            <Box mb={1} display="flex" alignItems="center" key={item.name + index}>
              <Component color="primary" style={{ marginRight: '10px', marginLeft: '-10px' }} />
              <SurveyQuestionTitle
                small
                errors={errors}
                touched={touched}
                title={item.name}
                onTitleChange={setFieldValue}
                name={`${field}.options.${index}.name`}
              >
                <SurveyOptionActions
                  optionCurrentIndex={index}
                  handleOptionPositionChange={handleOptionPositionChange}
                  removeSurveyOption={handleRemoveSurveyOption}
                  optionsLength={options.length}
                />
              </SurveyQuestionTitle>
            </Box>
          );
        })}
        <Box display="flex" alignItems="center">
          <MaterialButton onClick={handleAddSurveyOption} className={classes.optionBtn}>
            <PlusWv color="#F8D0B6" fontSize="inherit" />
            <MaterialTypography style={{ marginLeft: '4px', color: '#678189' }} size="14px" weight={300}>
              {t('Add Option')}
            </MaterialTypography>
          </MaterialButton>
        </Box>
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

export default withTranslation('translations')(withStyles(classes)(MultiOptionSurvey));
