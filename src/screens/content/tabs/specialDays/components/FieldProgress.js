import React, { useMemo } from 'react';
import { withStyles, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { CircularProgressbarWithChildren as CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import classes from '../Survey.styles';
import circleProgressBarColors from '../../../../../constants/circleProgressBarColors';
import { percentageKeyGenerator } from '../../../../../utils/helpers';

const FieldProgress = ({ iconComponent: Icon, text, percentage, classes }) => {
  const { t } = useTranslation();

  const barColor = useMemo(() => {
    const key = percentageKeyGenerator(percentage);

    return circleProgressBarColors[key];
  }, [percentage]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" color="#678189">
      <Box className={classes.progressWrapper} color="#678189">
        <CircularProgressbar
          strokeWidth={5}
          value={percentage}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: barColor,
            trailColor: 'transparent',
          })}
        >
          <Icon fontSize="inherit" color="#678189" />
        </CircularProgressbar>
      </Box>
      <Box fontSize="20px" ml={3}>
        <Box>{t(text)}</Box>
        <Box>{t('Average')}</Box>
      </Box>
    </Box>
  );
};

export default withStyles(classes)(FieldProgress);
