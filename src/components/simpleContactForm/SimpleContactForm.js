import React from 'react';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import MaterialButton from '../materialButton/MaterialButton';
import { withTranslation } from 'react-i18next';
import * as Icons from '@material-ui/icons';
import MaterialTypography from '../materialTypography/MaterialTypography';
import useStyles from './SimpleContactForm.style';

const SimpleContactForm = props => {
  const { t, values, handleChange, handleSubmit, status } = props;
  const classes = useStyles();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label={t('Enter your text here')}
            fullWidth
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={values.message}
            onChange={handleChange}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <MaterialButton type="submit" variant="contained" color="secondary">
            {t('Send')}
          </MaterialButton>
        </Box>
      </form>
      {status.submitted && (
        <Box className={classes.successMessage}>
          <Icons.Check size="15" className={classes.successMessageIcon}/>
          <MaterialTypography size="16px" weight={300} color="inherit">
            {t('Your message has been successfully sent. We will contact you soon')}
          </MaterialTypography>
        </Box>
      )}
    </>
  );
};

export default withTranslation('translations')(SimpleContactForm);
