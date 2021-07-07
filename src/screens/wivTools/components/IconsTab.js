import React from 'react';
import { Box, Container } from '@material-ui/core';
import * as Icons from '../../../components/icons/Icons';
import MaterialTypography from '../../../components/materialTypography/MaterialTypography';
const IconsTab = () => {
  let icons = [];
  for (let icon of Object.keys(Icons)) {
    let tmp = (
      <Box key={icon} style={{ textAlign: 'center' }} m={1}>
        {React.createElement(Icons[icon], null)}
        <MaterialTypography>{icon}</MaterialTypography>
      </Box>
    );
    icons.push(tmp);
  }

  return (
    <Box display="flex" flexWrap="wrap">
      {icons}
    </Box>
  );
};

export default IconsTab;
