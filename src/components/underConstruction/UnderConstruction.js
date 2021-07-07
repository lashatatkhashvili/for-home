import React from 'react';
import MainLayoutContainer from '../mainLayout/MainLayoutContainer';
import useStyles from './UnderConstruction.style';
import Box from '@material-ui/core/Box';
import MaterialButton from '../materialButton/MaterialButton';
import * as Icons from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { withTranslation } from 'react-i18next';
import underConstruction from '../../assets/images/underConstruction.svg';
import * as routes from '../../constants/routes';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const UnderConstruction = props => {
  const { t } = props;
  const classes = useStyles();

  return (
    <MainLayoutContainer>
      <Box>
        <Grid container direction="column" justify="space-between">
          <Grid item className={classes.underConstructionTopContent}>
            <Box mt={15}>
              <MaterialTypography className={classes.commingSoonText}>{t('Comming Soon')}</MaterialTypography>

              <MaterialTypography className={classes.subText}>
                {t(
                  'We are working hard on this feature to provide you a great experience. Stay tuned, it will be ready soon!'
                )}
              </MaterialTypography>

              <Box mt={2} className={classes.backButton}>
                <Link component={RouterLink} to={routes.HOME}>
                  <MaterialButton
                    variant="contained"
                    color="secondary"
                    startIcon={<Icons.ArrowBack fontSize="large" style={{ fontSize: '26px' }} />}
                    size="large"
                  >
                    Go Back
                  </MaterialButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item className={classes.underConstructionImage}>
            <img src={underConstruction} alt="Under Construction" />
          </Grid>
        </Grid>
      </Box>
    </MainLayoutContainer>
  );
};

export default withTranslation('translations')(UnderConstruction);
