import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Box, TextField, IconButton, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { withTranslation } from 'react-i18next';

import classes from '../NewSurveyDialogStyle';
import MaterialTypography from '../../../../../../../components/materialTypography/MaterialTypography';
import { EditWv } from '../../../../../../../components/icons/Icons';
import { getIn } from 'formik';
import { useOutsideClick } from '../../../../../../../hooks/useOutsideClick';
import { replaceTwoSpacesInInput } from '../../../../../../../utils/helpers';

const SurveyQuestionTitle = ({
  t,
  name,
  small,
  index,
  errors,
  touched,
  classes,
  children,
  title = '',
  onTitleChange,
}) => {
  const [questionTitle, setQuestionTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(!title);

  const inputRef = useRef(null);

  const errorText = useMemo(() => {
    return getIn(touched, name) && getIn(errors, name);
  }, [name, touched, errors]);

  const handleEditTitle = useCallback(() => {
    if (!questionTitle) return;
    const valueToApply = replaceTwoSpacesInInput(questionTitle);
    if (!valueToApply.trim()) return;
    setIsEditing(false);
    onTitleChange(name, valueToApply);
  }, [onTitleChange, questionTitle]);

  useOutsideClick(inputRef, handleEditTitle);

  const handleChange = useCallback(event => {
    const { value } = event.target;
    setQuestionTitle(value);
  }, []);

  return (
    <Box className={classes.questionTitleWrapper}>
      {questionTitle && !isEditing ? (
        <Box style={{ color: !!errorText ? '#f44336' : '' }}>
          <MaterialTypography className={small ? classes.smallQuestionTitleText : classes.questionTitleText}>
            {index && `${index}.`} {questionTitle}
          </MaterialTypography>
        </Box>
      ) : (
        <TextField
          placeholder={t('Text input question title')}
          size={small ? 'small' : 'medium'}
          inputProps={{ style: { fontSize: '14px', minWidth: !small && '232px' } }}
          error={!!errorText}
          helperText={errorText}
          InputProps={{
            endAdornment: (
              <Icons.Check onClick={handleEditTitle} fontSize={small && 'inherit'} style={{ cursor: 'pointer' }} />
            ),
          }}
          className={`${classes.questionTitle} ${small ? classes.smallInput : ''}`}
          value={questionTitle}
          onChange={handleChange}
          ref={inputRef}
        />
      )}
      {!isEditing && (
        <IconButton
          onClick={() => setIsEditing(true)}
          size="small"
          className={`survey-title-edit ${classes.titleEditBtn}`}
        >
          <EditWv fontSize={small && 'inherit'} />
        </IconButton>
      )}
      {children}
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(SurveyQuestionTitle));
