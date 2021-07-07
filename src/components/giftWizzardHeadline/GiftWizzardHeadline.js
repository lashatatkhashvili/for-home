import React from 'react';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { withTranslation } from 'react-i18next';

const GiftWizzardHeadline = props => {
  const {
    // t,
    title,
    subtitle,
  } = props;

  return (
    <>
      <Box mb={2} style={{ textAlign: 'center' }}>
        <MaterialTypography size="20px" weight={500}>
          {title}
        </MaterialTypography>
      </Box>

      <Box style={{ width: '500px', margin: '0 auto 56px', textAlign: 'center' }}>
        <MaterialTypography component="div" size="14px" weight={300}>
          {subtitle}
        </MaterialTypography>
      </Box>
    </>
  );
};

export default withTranslation('translations')(GiftWizzardHeadline);
