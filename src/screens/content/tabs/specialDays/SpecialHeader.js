import React from 'react';
import { Box } from '@material-ui/core';

const SurveyHeader = ({ children }) => {
  return (
    <Box
      p={3}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      style={{ borderBottom: '1px solid #eaebeb' }}
    >
      {children}
    </Box>
  );
};

export default SurveyHeader;
