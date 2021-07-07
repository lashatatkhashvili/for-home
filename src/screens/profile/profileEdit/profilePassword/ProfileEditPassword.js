import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import styles from '../ProfileEdit.module.scss';
import { Button, TextField } from '@material-ui/core';

class ProfileEditPassword extends Component {

  render() {

    const {
      t,
      values,
      touched,
      handleChange,
      errors,
      handleSubmit,
      isLoadingUpdateUserPassword
    } = this.props;

    return (
            <>
              <Box mb={3} >
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label={t('Enter Existing Password')}
                  type="password"
                  value={values.password}
                  className={styles.input}
                  helperText={touched.password && errors.password}
                  error={touched.password && errors.password}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Box>
              <Box mb={3} >
                <TextField
                  fullWidth
                  id="new_password"
                  name="new_password"
                  label={t('Enter New Password')}
                  type="password"
                  value={values.newPassword}
                  className={styles.input}
                  helperText={touched.new_password && errors.new_password}
                  error={touched.new_password && errors.new_password}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Box>
              <Box mb={3} >
                <TextField
                  fullWidth
                  id="new_password_confirmation"
                  name="new_password_confirmation"
                  label={t('Repeat New Password')}
                  type="password"
                  value={values.new_password_confirmation}
                  className={styles.input}
                  helperText={touched.new_password_confirmation && errors.new_password_confirmation}
                  error={touched.new_password_confirmation && errors.new_password_confirmation}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Box>
              <Box mb={3} className={styles.buttonContainer}>
                <Button variant="secondary" color="secondary" className={styles.passwordButton} onClick={handleSubmit} disabled={isLoadingUpdateUserPassword}>
                  {t('UPDATE PASSWORD')}
                </Button>
              </Box>
            </>

    );
  }
}



export default withTranslation('translations')(ProfileEditPassword);
