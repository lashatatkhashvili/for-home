import React from 'react';
import FormDrawer from '../formDrawer/FormDrawer';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { TextField } from '@material-ui/core';
import MaterialButton from '../materialButton/MaterialButton';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import useStyles from './ContactDrawer.style';
import * as Icons from '@material-ui/icons';

const ContactDrawer = props => {
  const { t, isOpen, onClose, title, description, handleSubmit, handleChange, values, touched, errors, status, isSubmitting } = props;
  const classes = useStyles();
  return (
    <FormDrawer isOpen={isOpen} title={title} onClose={onClose}>
      <Box component="form" p={4} onSubmit={handleSubmit} className={classes.form}>

        <Box mb={4}>
          <MaterialTypography size="14px" weight="300" align="center">
            {description}
          </MaterialTypography>
        </Box>

        <Box mb={4}>
          <MaterialTypography size="12px" weight={300} color="primary" gutterBottom style={{ opacity: 0.5 }}>
            {t('Describe your request')}
          </MaterialTypography>
          <TextField
            fullWidth
            name="message"
            multiline
            rows={4}
            variant="outlined"
            placeholder={t('Enter your text here')}
            value={values.message}
            error={touched.message && errors.message}
            onChange={handleChange}
          />
        </Box>

        <MaterialButton type="submit" variant="contained" fullWidth color="secondary" disabled={isSubmitting}>
          {t('Send')}
        </MaterialButton>
      </Box>
      {status.submitted && (
        <Box className={classes.successMessage}>
          <Icons.Check size="15" className={classes.successMessageIcon} />
          <MaterialTypography size="16px" weight={300} color="inherit">
            {t('Your message has been successfully sent. We will contact you soon')}
          </MaterialTypography>
        </Box>
      )}
    </FormDrawer>
  );
};

ContactDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withTranslation('translations')(ContactDrawer);
