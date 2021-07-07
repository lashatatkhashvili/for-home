import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import MainLayoutContainer from '../../../components/mainLayout/MainLayoutContainer';
import styles from './ProfileEdit.module.scss';
import Box from '@material-ui/core/Box';
import { Button, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ProfilePasswordForm from './profilePassword/ProfilePasswordForm';
import LoaderWrapper from '../../../hoc/loaderWrapper/LoaderWrapper';
import { userNavigatingToScreen } from '../../../network/analytics/AnalyticUtils';
import { USER_NAVIGATED_TO_PROFILE } from '../../../constants/analytics';
import Avatar from '@material-ui/core/Avatar';


class ProfileEdit extends Component {

  componentDidMount() {
    userNavigatingToScreen(USER_NAVIGATED_TO_PROFILE);
  }

  render() {

    const {
      t,
      authUser,
      values,
      touched,
      handleChange,
      errors,
      handleSubmit,
      updateUserPassword,
      isLoadingUpdateUserInfo,
      isLoadingUpdateUserPassword,
      setFieldValue,
      setGlobalMessage,
      history
    } = this.props;


    const isLoading = isLoadingUpdateUserInfo;
    return (
      <MainLayoutContainer>
        <LoaderWrapper isLoading={isLoading}>
        <div className={styles.profileEditContainer}>
          <Grid container justify="space-between" alignItems="center" className={styles.profileEditHeader}>
            <Box>
              <Typography variant="h6" className={styles.title}>{t(`${authUser && authUser.name}'s Profile`)}</Typography>
            </Box>
            <Button variant="contained" color="secondary" className={styles.saveButton} onClick={handleSubmit}>
              {t('SAVE CHANGES')}
            </Button>
          </Grid>
          <Box className={styles.profileFormsContainer}>
            <Box className={styles.profileInfoContainer}>
              <Grid container className={styles.imageContainer} alignItems="center">
                <Grid xs={3} >
                  <Avatar src={authUser && authUser.avatar} className={styles.profileImage}/>
                </Grid>
                <Grid xs={9} className={styles.inputContainer}>
                    <TextField
                      fullWidth
                      id="eventTitle"
                      name="name"
                      label={t('Name')}
                      value={values.name}
                      className={styles.input}
                      helperText={touched.name && errors.name}
                      error={touched.name && errors.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                </Grid>
              </Grid>
              <Box>
                <Box mb={3} >
                  <TextField
                    fullWidth
                    id="eventTitle"
                    name="email"
                    label={t('Email')}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={authUser && authUser.email}
                    className={styles.input}
                    variant="outlined"
                  />
                </Box>
                <Box mb={3} >
                  <TextField
                    fullWidth
                    id="eventTitle"
                    name="phone"
                    label={t('Phone')}
                    value={values.phone}
                    className={styles.input}
                    helperText={touched.phone && errors.phone}
                    error={touched.phone && errors.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>
            <Box className={styles.profilePasswordsContainer}>
              <ProfilePasswordForm
                updateUserPassword={updateUserPassword}
                authUser={authUser}
                setGlobalMessage={setGlobalMessage}
                history={history}
                isLoadingUpdateUserPassword={isLoadingUpdateUserPassword}
              />
            </Box>
          </Box>
        </div>
        </LoaderWrapper>
      </MainLayoutContainer>
    );
  }
}



export default (withTranslation('translations')(ProfileEdit));
