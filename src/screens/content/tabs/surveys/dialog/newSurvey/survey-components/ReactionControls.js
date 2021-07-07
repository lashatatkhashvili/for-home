import React, { useState, useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import { withStyles, Box, Button, Typography } from '@material-ui/core';

import classes from '../NewSurveyDialogStyle';
import { CheckboxWv, CheckboxCheckedWv } from '../../../../../../../components/icons/Icons';

const ReactionControls = ({ t, classes, setFieldValue, isMandatory, field, isMeasurementIndicator, children }) => {
  const [isForMeasurement, setIsForMeasurement] = useState(false);

  const handleToggleMandatory = useCallback(() => {
    setFieldValue(field, !isMandatory);
  }, [isMandatory, setFieldValue, field]);

  return (
    <Box fontSize="14px" className={classes.fieldControlsWrapper}>
      {children && <Box>{children}</Box>}
      <Box mb="8px">
        <Button classes={classes.reactionsControlsBtn} size="small" onClick={handleToggleMandatory}>
          {!isMandatory ? <CheckboxWv /> : <CheckboxCheckedWv />}
          <Typography className={classes.reactionControlsText}>{t('Mandatory field')}</Typography>
        </Button>
      </Box>
      {isMeasurementIndicator && (
        <Box>
          <Button
            classes={classes.reactionsControlsBtn}
            size="small"
            onClick={() => setIsForMeasurement(!isForMeasurement)}
          >
            {!isForMeasurement ? <CheckboxWv size="small" /> : <CheckboxCheckedWv size="small" />}
            <Typography className={classes.reactionControlsText}>
              {t('Use this questions to measure community satisfaction')}
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default withTranslation('translations')(withStyles(classes)(ReactionControls));
