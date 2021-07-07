import React from 'react';
import useStyles from './ProfileOverviewCard.style';
// import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MaterialTypography from '../materialTypography/MaterialTypography';

const ProfileOverviewCard = props => {
  const classes = useStyles(props);
  const { label, secondaryLabel, onClickSecondaryLabel, children } = props;

  return (
    <Box py={3} px={1} className={classes.profileOverviewCardWrapper}>
      <Box px={1}>
        <Grid container justify="space-between" alignItems="center" wrap="nowrap">
          <Grid item className={classes.profileOverviewCardLabel}>
            <MaterialTypography size="14px" weight={500}>
              {label}
            </MaterialTypography>
          </Grid>

          {secondaryLabel && (
            <Grid item onClick={onClickSecondaryLabel}>
              <MaterialTypography size="14px" weight={500} className={classes.secondaryLabel}>
                {secondaryLabel}
              </MaterialTypography>
            </Grid>
          )}
        </Grid>
      </Box>

      <Box mt={2}>{children}</Box>
    </Box>
  );
};

export default ProfileOverviewCard;
