import React from 'react';
import Box from '@material-ui/core/Box';
import * as Icons from '@material-ui/icons';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { withTranslation } from 'react-i18next';
import useStyles from './CreditCard.style';
import PropTypes from 'prop-types';

const CreditCard = props => {
  const { t, lastDigits, expiration, isSelected } = props;
  const classes = useStyles();
  const year = expiration.toString().substring(0, 2);
  const month = expiration.toString().substring(2, 4);
  return (
    <Box className={`${classes.savedCardWrapper} ${isSelected && classes.isCardActive}`}>
      <Box display="flex" alignItems="center">
        <Icons.Payment className={classes.savedCardIcon} fontSize="large" />
        <MaterialTypography size="14px" weight={500} className={classes.cardNumberDots}>
          ••••
        </MaterialTypography>
        <MaterialTypography size="14px" weight={500} className={classes.cardNumberDots}>
          ••••
        </MaterialTypography>
        <MaterialTypography size="14px" weight={500} className={classes.cardNumberDots}>
          ••••
        </MaterialTypography>
        <MaterialTypography size="14px" weight={500}>
          {lastDigits}
        </MaterialTypography>
      </Box>
      <Box>
        <MaterialTypography size="14px" weight={500} align="right">
          {t('Exp.').toUpperCase()}
          <br />
          {`${month}/${year}`}
        </MaterialTypography>
      </Box>
    </Box>
  );
};

CreditCard.propTypes = {
  lastDigits: PropTypes.string,
  expiration: PropTypes.number,
  isSelected: PropTypes.bool,
};

export default withTranslation('translations')(CreditCard);
