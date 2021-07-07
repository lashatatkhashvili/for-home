import React, { useMemo } from 'react';
import { withStyles, Box, Typography } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';

import { INPUT, SINGLE_SELECT, MULTI_SELECT, RATING, REACTIONS } from '../../../../../constants/surveys';
import classes from '../Survey.styles';
import MaterialTypography from '../../../../../components/materialTypography/MaterialTypography';
import {
  PollSecondaryWv,
  TextWv,
  CheckboxCheckedWv,
  RadioSelectedWv,
  StarWv,
  GreatEmojiWv,
} from '../../../../../components/icons/Icons';

const SurveyTitle = ({ type, title, total = 0, index, t, classes }) => {
  const Info = useMemo(() => {
    let text = `Total ${total} `;
    let Icon;
    if (type === INPUT) {
      text += 'Answers';
      Icon = PollSecondaryWv;
    } else {
      text += 'Votes';
      Icon = PollSecondaryWv;
    }

    return (
      <Box display="flex" alignItems="center" fontSize="14px">
        <Box mr={1} color="#71dd6b" className={classes.titleIconWrapper}>
          <Icon color="inherit" fontSize="inherit" />
        </Box>
        {t(text)}
      </Box>
    );
  }, [type]);

  return (
    <>
      <Box>
        <MaterialTypography className={classes.title}>
          {typeof index === 'number' && `${index + 1}.`} {title}
        </MaterialTypography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TypeInfo type={type} />
        {Info}
      </Box>
    </>
  );
};

const TypeInfo = ({ type }) => {
  const { t } = useTranslation();
  const Icon = types[type].icon;

  return (
    <Box mt={1} display="flex" alignItems="center" color="rgba(46, 53, 55, 0.5)">
      <Box mr={1} display="flex" alignItems="center" color="rgba(46, 53, 55, 0.5)">
        <Icon color="rgba(46, 53, 55, 0.5)" checkcolor="rgba(46, 53, 55, 0.5)" />
      </Box>
      <MaterialTypography size="12px" style={{ color: 'inherit' }}>
        {t(types[type].text)}
      </MaterialTypography>
    </Box>
  );
};

const types = {
  [INPUT]: { icon: TextWv, text: 'Textfield' },
  [SINGLE_SELECT]: { icon: RadioSelectedWv, text: 'Radiogroup' },
  [MULTI_SELECT]: { icon: CheckboxCheckedWv, text: 'Checkbox' },
  [RATING]: { icon: StarWv, text: 'Rating' },
  [REACTIONS]: { icon: GreatEmojiWv, text: 'Reactions' },
};

export default withTranslation('translations')(withStyles(classes)(SurveyTitle));
