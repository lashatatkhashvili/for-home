import React, { useMemo } from 'react';

import useStyles from './VoteInfo.styles';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const VoteInfo = ({ voteCount = 50, label, totalVotes = 100 }) => {
  const classes = useStyles();

  const percentage = useMemo(() => {
    if (!totalVotes) return '0%';
    // removes unnecessary digits for the floats that have more than 2 decimals
    const rounded = Math.round(((voteCount * 100) / totalVotes) * 100) / 100;
    return `${rounded}%`;
  }, [voteCount, totalVotes]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.content}>
        <Box className={classes.labelWrapper}>
          <MaterialTypography className={classes.label}>{label}</MaterialTypography>
          <MaterialTypography className={classes.voteCount}>{voteCount}</MaterialTypography>
        </Box>
        <Box className={classes.barWrapper}>
          <Box className={classes.bar} style={{ width: percentage }} />
        </Box>
      </Box>

      <Box className={classes.percentage}>{percentage}</Box>
    </Box>
  );
};

export default VoteInfo;
