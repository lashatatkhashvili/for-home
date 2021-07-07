import React, { useEffect, useRef, useState } from 'react';
import useStyles from './EmailBuilder.style';
import styles from '../../templates/dialog/newTemplate/NewTemplateDialog.module.scss';
import { Box, Dialog } from '@material-ui/core';
import { Close } from '../../../../../components/icons/Icons';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailEditor from 'react-email-editor';
import defaultTemplate from './default.json';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentEmailTemplate,
  selectIsCreatingTemplate,
  selectIsFetchingCurrentTemplate,
  selectIsUpdatingTemplate,
} from '../../../../../reducers/emailTemplates/emailTemplates.selectors';
import {
  createEmailTemplate,
  fetchEmailTemplate,
  resetCurrentTemplate,
  updateEmailTemplate,
} from '../../../../../reducers/emailTemplates/emailTemplates.actions';
import { emailTemplateSchema } from '../../../../../validation/emailTemplateSchemas';
import { useFormik } from 'formik';
import { getPublicFileUrl, urltoFile } from '../../../../../utils/helpers';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import LoaderWrapper from '../../../../../hoc/loaderWrapper/LoaderWrapper';
import ImagePickerModal from './imageGallery/ImagePickerModal';
import objectToFormData from 'object-to-formdata';
import emailTemplatesService from '../../../../../services/emailTemplatesService';

const EmailBuilder = props => {
  const { isOpen, onClose, templateId } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isImagePickerModalOpen, setIsImagePickerModalOpen] = useState(false);
  const [onFileSelectedHandler, setOnFileSelectedHandler] = useState(null);

  const editorRef = useRef(null);

  const currentTemplate = useSelector(selectCurrentEmailTemplate);
  const isFetchingCurrentTemplate = useSelector(selectIsFetchingCurrentTemplate);
  const isCreatingTemplate = useSelector(selectIsCreatingTemplate);
  const isUpdatingTemplate = useSelector(selectIsUpdatingTemplate);

  const isLoading = isFetchingCurrentTemplate || isCreatingTemplate || isUpdatingTemplate;

  useEffect(() => {
    return () => {
      dispatch(resetCurrentTemplate());
    };
  }, []);

  const formValues = () => {
    let initialValues = {
      templateName: '',
      templateSubject: '',
    };

    if (currentTemplate) {
      initialValues = {
        ...initialValues,
        templateName: currentTemplate.name,
        templateSubject: currentTemplate.subject,
      };
    }

    return initialValues;
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    enableReinitialize: true,

    initialValues: formValues(),

    validationSchema: emailTemplateSchema,

    onSubmit: values => exportHtml(values),
  });

  const exportHtml = values => {
    editorRef.current.editor.exportHtml(async data => {
      const { design, html } = data;
      const parsedHTML = new DOMParser().parseFromString(html, 'text/html');
      const templateImageWrapper = document.querySelector('#template-image');
      templateImageWrapper.style.maxWidth = '720px';
      templateImageWrapper.style.height = '720px';
      templateImageWrapper.appendChild(parsedHTML.documentElement);

      const canvas = await html2canvas(templateImageWrapper, { allowTaint: true, useCORS: true });
      const image = canvas.toDataURL('image/png');

      const file = await urltoFile(image, uuidv4(), 'image/png');

      const template = {
        name: values.templateName,
        subject: values.templateSubject,
        image: file,
        body: html,
        jsonBody: JSON.stringify(design),
      };

      if (!Boolean(templateId)) {
        dispatch(createEmailTemplate(template));
      } else {
        dispatch(updateEmailTemplate(templateId, template));
      }

      templateImageWrapper.remove();
      onClose();
    });
  };

  const onLoad = () => {
    if (!Boolean(templateId)) {
      setTimeout(() => {
        editorRef.current.editor.loadDesign(defaultTemplate);
        handleUploadImage();
      }, 1);
    } else {
      dispatch(fetchEmailTemplate(templateId)).then(template => {
        editorRef.current.editor.loadDesign(JSON.parse(template.jsonBody));
        handleUploadImage();
      });
    }
  };

  const handleUploadImage = () => {
    editorRef.current.editor.registerCallback('selectImage', (data, done) => {
      setIsImagePickerModalOpen(true);

      setOnFileSelectedHandler(() => {
        return selectedFileUrl => {
          done({ url: selectedFileUrl });
          setIsImagePickerModalOpen(false);
        };
      });
    });
  };

  return (
    <Dialog open={isOpen} maxWidth="lg" scroll="paper" fullWidth onClose={onClose}>
      <LoaderWrapper isLoading={isLoading} className={classes.emailBuilderLoader} style={{ height: '410px' }}>
        <Box className={styles.dialogBoxHeader}>
          <h3>{t('Create Your Template')}</h3>
          <Close className={styles.closeIcon} onClick={onClose} />
        </Box>

        <DialogContent>
          <Box my={3}>
            <Grid container direction="column" alignItems="center" wrap="nowrap">
              <TextField
                label={t('Name')}
                variant="filled"
                name="templateName"
                size="small"
                value={values.templateName}
                onChange={handleChange}
                error={Boolean(touched.templateName && errors.templateName)}
                helperText={touched.templateName && errors.templateName}
                fullWidth
                inputProps={{
                  autoComplete: 'off',
                }}
                className={classes.emailBuilderInput}
              />

              <TextField
                label={t('Subject')}
                variant="outlined"
                name="templateSubject"
                size="small"
                value={values.templateSubject}
                onChange={handleChange}
                error={Boolean(touched.templateSubject && errors.templateSubject)}
                helperText={touched.templateSubject && errors.templateSubject}
                fullWidth
                style={{ marginTop: '16px' }}
                inputProps={{
                  autoComplete: 'off',
                }}
              />
            </Grid>
          </Box>

          <EmailEditor
            ref={editorRef}
            minHeight="calc(100vh -  280px)"
            onLoad={onLoad}
            projectId={6353}
            options={{
              mergeTags: {
                member_name: {
                  name: 'Member name',
                  value: '{{member_name}}',
                },
                community_name: {
                  name: 'Community name',
                  value: '{{community_name}}',
                },
              },
            }}
          />

          <div id="template-image"></div>
        </DialogContent>

        <Box mx={3}>
          <DialogActions>
            <Button className={classes.submitButton} size="large" onClick={handleSubmit}>
              {templateId ? t('Update') : t('Save')}
            </Button>
          </DialogActions>
        </Box>
      </LoaderWrapper>

      <ImagePickerModal
        isOpen={isImagePickerModalOpen}
        onClose={() => setIsImagePickerModalOpen(false)}
        onFileSelectedHandler={onFileSelectedHandler}
      />
    </Dialog>
  );
};

export default EmailBuilder;
