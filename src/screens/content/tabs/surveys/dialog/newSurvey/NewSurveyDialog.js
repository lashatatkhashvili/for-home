import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classes from './NewSurveyDialogStyle';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MaterialButton from '../../../../../../components/materialButton/MaterialButton';
import InputSurvey from './survey-types/InputSurvey';
import MultiOptionSurvey from './survey-types/MultiOptionSurvey';
import RatingSurvey from './survey-types/RatingSurvey';
import ReactionsSurvey from './survey-types/ReactionsSurvey';
import MaterialTypography from '../../../../../../components/materialTypography/MaterialTypography';
import SurveyFooter from './survey-components/SurveyFooter';
import { INPUT, MULTI_SELECT, RATING, REACTIONS, SINGLE_SELECT } from '../../../../../../constants/surveys';
import { moveItemInArray, replaceTwoSpacesInInput } from '../../../../../../utils/helpers';
import { Close } from '../../../../../../components/icons/Icons';
import { useFormik } from 'formik';
import surveyFormik from './NewSurveyDialogForm';
import {
  createSurvey,
  deselectSurvey,
  getSurvey,
  updateSurvey,
} from '../../../../../../reducers/surveys/surveys.actions';
import { NEW_SURVEY } from '../../../../../../constants/routes';
import LoaderWrapper from '../../../../../../hoc/loaderWrapper/LoaderWrapper';
import { selectIsFetchingSurvey, selectSelectedSurvey } from '../../../../../../reducers/surveys/surveys.selectors';
import NoAnyItems from '../../../../../../components/noAnyItems/NoAnyItems';
import noSurveys from '../../../../../../assets/images/empty-survey.svg';
import moment from 'moment';
import styles from './NewSurveyDialog.module.scss';
import { Dialog } from '@material-ui/core';
import RichTextEditor from '../../../../../../components/richTextEditor/RichTextEditor';

const generateDefaultSurvey = (type, customProps = {}) => {
  const defaultSurvey = {
    name: '',
    isMandatory: 0,
    options: [{ name: '' }],
    type,
    ...customProps,
  };
  if (type === INPUT || type === REACTIONS) {
    delete defaultSurvey.options;
  }

  return defaultSurvey;
};

const NewSurveyDialog = props => {
  const { t, classes, history , isOpen , onClose , currentSurvey } = props;
  const { id } = useParams();

  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const buildingId = null;
  const isFetchingSurvey = useSelector(selectIsFetchingSurvey);
  const dispatch = useDispatch();

  const { values, setFieldValue, handleChange, submitForm, errors, touched } = useFormik(
    surveyFormik(buildingId, currentSurvey, async survey => {
      try {
        if (isCreating) return;
        setIsCreating(true);
        if (currentSurvey) {
          await dispatch(updateSurvey(survey, currentSurvey.id));
        } else {
          await dispatch(createSurvey(survey));
        }
        setIsCreating(false);
        onClose();
      } catch (error) {
        setIsCreating(false);
      }
    })
  );
  const { fields } = values;



  useEffect(() => {
    return () => {
      dispatch(deselectSurvey());
    };
  }, [dispatch]);

  const isLoading = useMemo(() => {
    return isCreating || isFetchingSurvey || isDeleting;
  }, [isCreating, isFetchingSurvey, isDeleting]);

  const handleAddSurveyItem = useCallback(
    type => {
      if (isLoading) return;
      let defSurvey;
      if (type === RATING) {
        defSurvey = generateDefaultSurvey(type, {
          options: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }],
        });
      } else {
        defSurvey = generateDefaultSurvey(type);
      }
      setFieldValue('fields', [...fields, defSurvey]);
    },
    [fields, isLoading, setFieldValue]
  );

  const handleSurveyPositionChange = useCallback(
    (index, direction) => {
      const changedFields = moveItemInArray(fields, index, direction);
      setFieldValue('fields', changedFields);
    },
    [fields, setFieldValue]
  );

  const handleRemoveSurvey = useCallback(
    deleteIndex => {
      const newFields = fields.filter((survey, surveyIndex) => deleteIndex !== surveyIndex);
      setFieldValue('fields', newFields);
    },
    [fields, setFieldValue]
  );

  const generateSurveyProps = useCallback(
    (survey, index) => ({
      fields,
      errors,
      touched,
      survey: survey,
      title: survey.name,
      currentIndex: index,
      options: survey.options,
      ratings: survey.ratings,
      field: `fields.${index}`,
      key: survey.type + index,
      componentType: survey.type,
      surveyLength: fields.length,
      handleChange,
      setFieldValue,
      handleRemoveSurvey,
      handleSurveyPositionChange,
    }),
    [fields, touched, errors, handleSurveyPositionChange, handleRemoveSurvey, setFieldValue, handleChange]
  );

  const handleSurveyTitleChange = useCallback(
    ({ target }) => {
      const { value } = target;
      let valueToApply = replaceTwoSpacesInInput(value);
      if (valueToApply.length > 30) return;
      setFieldValue('title', valueToApply);
    },
    [setFieldValue]
  );

  const publishHandler = useCallback(() => {
    if (isLoading) return;
    setFieldValue('publishedAt', moment().format('YYYY-MM-DD HH:mm:ss'));
    submitForm();
  }, [submitForm, isLoading, setFieldValue]);



  return (
    <Dialog open={isOpen}  maxWidth={1056} onClose={onClose}>
      <Box className={styles.dialogBoxContainer}>

        {/*   ==== Header === */}
        <Box className={styles.dialogBoxHeader}>
          <h3>{t('Create New Survey')}</h3>
          <Close className={styles.closeIcon} onClick={onClose}/>
        </Box>

        {/*   === Content ====  */}
        <LoaderWrapper isLoading={isCreating || isFetchingSurvey} style={{ height: '410px' }}>
          <Grid xs={12} item  component={Box} mb="21px" pl={3} mt={3}>
            {!isLoading && (
              <>
              <TextField
                name="title"
                size="medium"
                value={values.title}
                placeholder="Survey Name"
                onChange={handleSurveyTitleChange}
                error={!!(touched.title && errors.title)}
                helperText={touched.title && errors.title}
                inputProps={{ className: classes.titleInput }}
              />
              <Box style={{marginTop : 16}}>
                <TextField
                  placeholder="Description"
                  name="description"
                  inputProps={{ className: classes.titleInput }}
                  value={values.description}
                  onChange={e => setFieldValue('description', e.target.value)}
                />
              </Box>
              </>
            )}
          </Grid>

          {/* ===== CONTENT ======= */}
          {fields.length > 0 || id ? (
            <Grid xs={12} item component={Box} pr={3} pl={3}>
              {fields.map((survey, index) => {
                switch (survey.type) {
                  case INPUT:
                    return <InputSurvey {...generateSurveyProps(survey, index)} />;
                  case SINGLE_SELECT:
                    return <MultiOptionSurvey {...generateSurveyProps(survey, index)} />;
                  case MULTI_SELECT:
                    return <MultiOptionSurvey {...generateSurveyProps(survey, index)} />;
                  case RATING:
                    return <RatingSurvey {...generateSurveyProps(survey, index)} />;
                  case REACTIONS:
                    return <ReactionsSurvey {...generateSurveyProps(survey, index)} />;
                }
              })}
            </Grid>
          ) : (
            <NoAnyItems
              text={t("Let's start building the survey!")}
              secondaryText={t('Please choose any element from the toolbar below and get started')}
              image={noSurveys}
              headingClassName={classes.noItemHeading}
              subHeadingClassName={classes.noItemSubHeading}
              imageClassName={classes.noItemImageWrapper}
              className={classes.noItemWrapper}
            />
          )}
        </LoaderWrapper>

        <Box pl={3}>
          <Box display="flex" alignItems="center" mt={2} mb="20px">
          <MaterialTypography size="20px" weight={500}>
            {t('Add New Element')}
          </MaterialTypography>
          <Box className={classes.line}></Box>
        </Box>
          <SurveyFooter clickHandler={handleAddSurveyItem} />
        </Box>

        {/*  === Footer ===    */}
        <Grid container item justify="flex-end" className={styles.dialogBoxFooter}>
          <MaterialButton
            className={classes.publishBtn}
            variant="contained"
            color="secondary"
            size="large"
            onClick={publishHandler}
          >
            {currentSurvey && currentSurvey.isPublished ? t('Save') : t('Publish')}
          </MaterialButton>

        </Grid>
      </Box>

    </Dialog>
  );
};

export default withTranslation('translations')(withStyles(classes)(NewSurveyDialog));
