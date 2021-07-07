import React, { Component } from 'react';
import { Box, Dialog, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import styles from './NewUpsaleDialog.module.scss';
import { withTranslation } from 'react-i18next';
import { Close } from '../../../../../components/icons/Icons';
import ErrorMessage from '../../../../../components/errorMessage/ErrorMessage';
import ImagePicker from '../../../../../components/imagePicker/ImagePicker';
import MaterialButton from '../../../../../components/materialButton/MaterialButton';
import { getPublicFileUrl } from '../../../../../utils/helpers';

class NewUpsaleDialog extends Component {
  state = {
    image: null,
    currentTemplate: {},
    types: ['SERVICE', 'CATEGORY'],
  };

  componentDidMount() {
    const { currentTemplate } = this.props;

    if (currentTemplate) {
      this.setState({
        image: getPublicFileUrl(currentTemplate.fileId),
      });
    }
  }

  onFileSelect = files => {
    const file = {
      file: files[0],
      src: URL.createObjectURL(files[0]),
    };

    this.setState({
      image: file.src,
    });

    this.props.setFieldValue('image', file);
  };

  render() {
    const { t, isOpen, onClose, values, handleChange, touched, errors, handleSubmit, currentTemplate } = this.props;
    const { types, image } = this.state;

    return (
      <Dialog open={isOpen} className={styles.dialogBox} maxWidth={1056} onClose={onClose}>
        <Box className={styles.dialogBoxContainer}>
          {/*   ==== Header === */}
          <Box className={styles.dialogBoxHeader}>
            <h3>{t('Create New Banner')}</h3>
            <Close className={styles.closeIcon} onClick={onClose} />
          </Box>

          {/*   === Content ====  */}
          <Grid container className={styles.dialogBoxContent}>
            {/*  === LeftSide ===   */}
            <Grid xs={4} className={styles.dialogContainerLeftSide}>
              <h3 className={styles.contentHeading}>{t('Settings')}</h3>

              {/*  === Title === */}
              <Box>
                <TextField
                  fullWidth
                  id="eventTitle"
                  name="title"
                  label={t('Banner Title')}
                  value={values.title}
                  className={styles.input}
                  helperText={touched.title && errors.title}
                  error={touched.title && errors.title}
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

              <Box>
                <TextField
                  fullWidth
                  id="eventTitle"
                  name="buttonText"
                  label={t('Button Text')}
                  value={values.buttonText}
                  className={styles.input}
                  helperText={touched.buttonText && errors.buttonText}
                  error={touched.buttonText && errors.buttonText}
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

              {/*  === Data === */}
              <Box mb={3}>
                <TextField
                  fullWidth
                  id="data"
                  name="data"
                  label={t('Data')}
                  value={values.data}
                  className={styles.input}
                  helperText={touched.data && errors.data}
                  error={touched.data && errors.data}
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

              {/*  === Type === */}
              <Box mb={3}>
                <Select
                  fullWidth
                  value={values.type}
                  onChange={handleChange}
                  name="type"
                  error={touched.type && errors.type}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height: 40,
                  }}
                >
                  <MenuItem value={0}>{t('Type')}</MenuItem>
                  {types &&
                    Boolean(types.length) &&
                    types.map(type => {
                      return <MenuItem value={type}>{type}</MenuItem>;
                    })}
                </Select>
              </Box>
            </Grid>

            {/*  === RightSide ===   */}
            <Grid xs={8} className={styles.dialogContainerRightSide}>
              {/*<h3 className={styles.contentHeading}>{t('Settings')}</h3>*/}

              {/* === Content Box === */}

              <Box className={styles.contentBox}>
                {/*=== Editor === */}
                <Box mb={3}>
                  <textarea
                    name="description"
                    value={values.description}
                    className={styles.textarea}
                    placeholder={t('Description')}
                    style={{
                      borderColor: touched.description && errors.description ? '#f44336' : 'rgba(46, 53, 55, 0.2)',
                    }}
                    onChange={handleChange}
                  ></textarea>
                  {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                </Box>

                {/*   ==== Image  ====  */}
                <Box>
                  <ImagePicker
                    title={t('image')}
                    onFileSelect={this.onFileSelect}
                    image={image}
                    errorText={touched.image && errors.image && errors.image}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/*  === Footer ===    */}
          <Grid container item justify="flex-end" className={styles.dialogBoxFooter}>
            {currentTemplate && currentTemplate.id ? (
              <MaterialButton
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                size="large"
                className={styles.saveButton}
              >
                {t('SAVE CHANGES')}
              </MaterialButton>
            ) : (
              <MaterialButton
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                size="large"
                className={styles.submitButton}
              >
                {t('Publish')}
              </MaterialButton>
            )}
          </Grid>
        </Box>
      </Dialog>
    );
  }
}

export default withTranslation('translations')(NewUpsaleDialog);
