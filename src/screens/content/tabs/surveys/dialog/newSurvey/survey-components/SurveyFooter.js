import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import classes from '../NewSurveyDialogStyle';
import MaterialButton from '../../../../../../../components/materialButton/MaterialButton';
import { INPUT, SINGLE_SELECT, MULTI_SELECT, RATING, REACTIONS } from '../../../../../../../constants/surveys';
import { TextWv, RadioSelectedWv, CheckboxCheckedWv, GreatEmojiWv, StarWv } from '../../../../../../../components/icons/Icons';

const SurveyFooter = props => {
  const { classes, t, clickHandler } = props;

  return (
    <Box display="flex" boxShadow="0 0 4px 2px rgba(0, 0, 0, 0.04)" borderRadius="8px">
      {buttons.map(({ label, Icon, type }) => (
        <MaterialButton key={type} className={classes.footerButton} onClick={() => clickHandler(type)}>
          <Icon style={{ marginRight: '16px' }} />
          {t(label)}
        </MaterialButton>
      ))}
    </Box>
  );
};

const buttons = [
  {
    label: 'Text Input',
    Icon: TextWv,
    type: INPUT,
  },
  {
    label: 'Radiogroup',
    Icon: RadioSelectedWv,
    type: SINGLE_SELECT,
  },
  {
    label: 'Checkbox',
    Icon: CheckboxCheckedWv,
    type: MULTI_SELECT,
  },
  {
    label: 'Rating',
    Icon: StarWv,
    type: RATING,
  },
  {
    label: 'Reactions',
    Icon: GreatEmojiWv,
    type: REACTIONS,
  },
];

export default withTranslation('translations')(withStyles(classes)(SurveyFooter));
