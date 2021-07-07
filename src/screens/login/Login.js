import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MaterialButton from '../../components/materialButton/MaterialButton';
import useStyles from './Login.style';
import styles from './Login.module.scss';
import wivLogo from '../../assets/images/WIVlogo.png';

const Login = props => {
  const { t, errors, touched, values, handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root} square={true}>
      <Grid container justify="center">
        <Box p={3}>
          <img src={wivLogo} alt="" />
        </Box>
      </Grid>
      <Divider />
      <Box p={3}>
        <Grid container direction="column">
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <TextField
              id="standard-error"
              fullWidth
              placeholder="Username@domain.com"
              label={t('Email')}
              type="text"
              name="email"
              error={touched.email && errors.email}
              value={values.email}
              onChange={handleChange}
              className={classes.textField}
            />
            <TextField
              id="standard-password-input"
              label={t('Password')}
              fullWidth
              type="password"
              name="password"
              autoComplete="current-password"
              error={touched.password && errors.password}
              value={values.password}
              onChange={handleChange}
            />

            <div className={styles.error}>{errors.unauthorized && t('Access Error')}</div>

            <Typography component={Link} to="/forgot-password" className={classes.link} variant="body2" color="inherit">
              {t('Forgot Password')}
            </Typography>

            <MaterialButton variant="contained" type="submit" color="secondary" size="large" className={classes.button}>
              {t('login')}
            </MaterialButton>
          </form>
        </Grid>
      </Box>
    </Paper>
  );
};

export default withTranslation('translations')(Login);
