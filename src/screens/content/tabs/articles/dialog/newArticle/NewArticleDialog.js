import React, { Component } from 'react';
import { Box, Dialog, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import styles from './NewArticleDialog.module.scss';
import { withTranslation } from 'react-i18next';
import MaterialButton from '../../../../../../components/materialButton/MaterialButton';
import { Close } from '../../../../../../components/icons/Icons';
import { getPublicFileUrl } from '../../../../../../utils/helpers';
import ErrorMessage from '../../../../../../components/errorMessage/ErrorMessage';
import ImagesPickerWithControls from '../../../../../../components/imagesPickerWithControls/ImagesPickerWithControls';

class NewArticleDialog extends Component {
  state = {
    images: [],
    addImages: [],
    deleteImageIds: [],
    currentTemplate: {},
  };

  componentDidMount() {
    const { currentTemplate, getTemplatesCategoriesAction } = this.props;
    getTemplatesCategoriesAction();
    if (currentTemplate && currentTemplate.images) {
      const currentImages = currentTemplate.images.map(i => {
        return {
          id: i.id,
          src: getPublicFileUrl(i.file_id),
        };
      });
      this.setState({
        addImages: currentImages,
      });
    }
  }

  handleFileSelect = (addImages, deleteImageIds) => {
    const { setFieldValue } = this.props;

    this.setState({
      addImages,
      deleteImageIds,
    });

    setFieldValue('images', addImages);
  };

  render() {
    const {
      t,
      isOpen,
      onClose,
      values,
      handleChange,
      touched,
      errors,
      handleSubmit,
      currentTemplate,
      categories,
    } = this.props;

    const { addImages, deleteImageIds } = this.state;

    return (
      <Dialog open={isOpen} className={styles.dialogBox} maxWidth={1056} onClose={onClose}>
        <Box className={styles.dialogBoxContainer}>
          {/*   ==== Header === */}
          <Box className={styles.dialogBoxHeader}>
            <h3>{t('Create New Article')}</h3>
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
                  label={t('Template Title')}
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

              {/*  === URL === */}
              <Box mb={3}>
                <TextField
                  fullWidth
                  id="url"
                  name="url"
                  label={t('URL')}
                  value={values.url}
                  className={styles.input}
                  helperText={touched.url && errors.url}
                  error={touched.url && errors.url}
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

              {/*  === Category === */}
              <Box mb={3}>
                <Select
                  fullWidth
                  value={values.category}
                  onChange={handleChange}
                  name="category"
                  error={touched.category && errors.category}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height: 40,
                  }}
                >
                  <MenuItem value={0}>{t('Category')}</MenuItem>
                  {categories &&
                    Boolean(categories.length) &&
                    categories.map(cat => {
                      return <MenuItem value={cat.id}>{cat.name}</MenuItem>;
                    })}
                </Select>
                {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
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

                {/*   ==== Images  ====  */}
                <Box>
                  <ImagesPickerWithControls
                    title={t('images')}
                    currentImages={[]}
                    addImages={addImages}
                    deleteImageIds={deleteImageIds}
                    onChange={this.handleFileSelect}
                    errorText={touched.images && errors.images && errors.images}
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
                {t('PUBLISh')}
              </MaterialButton>
            )}
          </Grid>
        </Box>
      </Dialog>
    );
  }
}

export default withTranslation('translations')(NewArticleDialog);
