import React, { useEffect, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import CloseButton from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './ImagePickerModal.style';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import ImagePickerGallery from '../../../../../../components/imagesPickerWithControls/imagesPickerGallery/ImagePickerGallery';
import LoaderWrapper from '../../../../../../hoc/loaderWrapper/LoaderWrapper';
import MaterialTypography from '../../../../../../components/materialTypography/MaterialTypography';
import MaterialButton from '../../../../../../components/materialButton/MaterialButton';
import Button from '@material-ui/core/Button';
import objectToFormData from 'object-to-formdata';
import emailTemplatesService from '../../../../../../services/emailTemplatesService';
import { getPublicFileDownloadUrl } from '../../../../../../utils/helpers';

const ImagePickerModal = props => {
  const { isOpen, onClose, onFileSelectedHandler } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const handleSelectFileFromInput = event => {
    const files = {
      files: [event.target.files[0]],
    };

    emailTemplatesService.uploadTemplateFile(objectToFormData(files)).then(file => {
      onFileSelectedHandler(getPublicFileDownloadUrl(file[0].id));
    });
  };

  const handleSelectFileFromGallery = (files, params = {}) => {
    const fileId = params.fileIds[0];
    onFileSelectedHandler(getPublicFileDownloadUrl(fileId));
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <LoaderWrapper isLoading={false} style={{ height: '410px' }}>
        <DialogTitle disableTypography className={classes.dialogTitle}>
          <Grid container justify="space-between" alignItems="center" wrap="nowrap">
            <MaterialTypography size="16px" weight={500}>
              {t('Choose image')}
            </MaterialTypography>

            <CloseButton className={classes.closeButton} onClick={onClose} />
          </Grid>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <input
            type="file"
            name="templateImage"
            id="templateImage"
            style={{ display: 'none' }}
            onChange={handleSelectFileFromInput}
          />
          <MaterialButton component="label" htmlFor="templateImage" fullWidth className={classes.button} size="large">
            {t('Choose from your pc')}
          </MaterialButton>

          <ImagePickerGallery
            selectedImages={[]}
            onChange={handleSelectFileFromGallery}
            multiselect={false}
            control={
              <Box mt={2}>
                <Button fullWidth className={classes.button} size="large">
                  {t('Choose from wiv gallery')}
                </Button>
              </Box>
            }
          />
        </DialogContent>
      </LoaderWrapper>
    </Dialog>
  );
};

export default ImagePickerModal;
