import React, { useState } from 'react';
import { Box, Dialog, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import styles from './NewSpecialDayDialog.module.scss';
import { withTranslation } from 'react-i18next';
import MaterialButton from '../../../../../../components/materialButton/MaterialButton';
import { Close } from '../../../../../../components/icons/Icons';
import ImagesPickerWithControls from '../../../../../../components/imagesPickerWithControls/ImagesPickerWithControls';

const NewSpecialDay = ({ onClose, isOpen, currentTemplate }) => {
  const [image, setImage] = useState([]);
  const { t } = useTranslation();

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      startDate: '',
      endDate: '',
      image: '',
    },

    onSubmit: values => {
      console.log(values);
    },
  });

  const handleFileSelect = addImages => {
    addImages.length === 1 && image.length < 1 ? setImage(addImages) : setImage([]);
    addImages.length === 1 ? setFieldValue('image', addImages[0].src) : setFieldValue('image', '');
  };
  console.log(values);
  return (
    <Dialog open={isOpen} className={styles.dialogBox} maxWidth={1056} onClose={onClose}>
      <Box className={styles.dialogBoxContainer}>
        {/*   ==== Header === */}
        <Box className={styles.dialogBoxHeader}>
          <h3>{t('Create New Special Day')}</h3>
          <Close className={styles.closeIcon} onClick={onClose} />
        </Box>

        {/*   === Content ====  */}
        <Grid container className={styles.dialogBoxContent}>
          {/*  === LeftSide ===   */}
          <Grid xs={4} className={styles.dialogContainerLeftSide}>
            <h3 className={styles.contentHeading}>{t('Settings')}</h3>

            {/*  === Title === */}
            <Box mb={3}>
              <TextField
                fullWidth
                id="eventTitle"
                name="title"
                label={t('Title')}
                value={values.title}
                className={styles.input}
                // helperText={touched.title && errors.title}
                // error={touched.title && errors.title}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{
                  style: {
                    top: '-6px',
                  },
                }}
                inputProps={{
                  style: {
                    padding: '10.5px 14px',
                  },
                }}
              />
            </Box>

            <Box mb={3}>
              <TextField
                type="date"
                fullWidth
                id="startDate"
                name="startDate"
                label={t('Start Date')}
                value={values.startDate}
                className={styles.input}
                // helperText={touched.title && errors.title}
                // error={touched.title && errors.title}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{
                  style: {
                    top: '-6px',
                  },
                  shrink: true,
                }}
                inputProps={{
                  style: {
                    padding: '10.5px 14px',
                  },
                }}
              />
            </Box>

            <Box mb={3}>
              <TextField
                type="date"
                fullWidth
                id="endDate"
                name="endDate"
                label={t('End Date')}
                value={values.endDate}
                className={styles.input}
                // helperText={touched.title && errors.title}
                // error={touched.title && errors.title}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{
                  style: {
                    top: '-6px',
                  },
                  shrink: true,
                }}
                inputProps={{
                  style: {
                    padding: '10.5px 14px',
                  },
                }}
              />
            </Box>
          </Grid>

          {/*  === RightSide ===   */}
          <Grid xs={8} className={styles.dialogContainerRightSide}>
            <Box className={styles.contentBox}>
              <Box>
                <ImagesPickerWithControls
                  title={t('images')}
                  currentImages={[]}
                  addImages={image}
                  deleteImageIds={image}
                  onChange={handleFileSelect}
                  //errorText={touched.images && errors.images && errors.images}
                  gallery={true}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/*  === Footer ===    */}
        <Grid container item justify="flex-end" className={styles.dialogBoxFooter}>
          {currentTemplate && currentTemplate.id ? (
            <MaterialButton
              //onClick={handleSubmit}
              variant="contained"
              color="secondary"
              size="large"
              className={styles.saveButton}
            >
              {t('SAVE CHANGES')}
            </MaterialButton>
          ) : (
            <MaterialButton
              // onClick={handleSubmit}
              variant="contained"
              color="secondary"
              size="large"
              className={styles.submitButton}
            >
              {t('PUBLISh')}
            </MaterialButton>
          )}
        </Grid>
      </Box>
    </Dialog>
  );
};

export default withTranslation('translations')(NewSpecialDay);
