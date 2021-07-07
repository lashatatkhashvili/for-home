import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import * as Icons from '@material-ui/icons';
import MaterialTypography from '../materialTypography/MaterialTypography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import useStyles from './Question.style';

const Question = props => {
  const { index, question } = props;
  const classes = useStyles();

  return (
    <ExpansionPanel classes={{root: classes.panelRoot}} elevation={0}>
      <ExpansionPanelSummary
        classes={{root: classes.panelSummaryRoot, content: classes.panelSummaryContent}}
        id={`question-${index}`}
        expandIcon={<Icons.ExpandMore/>}
      >
        <MaterialTypography size="14px" weight={500}>{question.question}</MaterialTypography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{root: classes.panelDetailsRoot}}>
        <MaterialTypography size="14px" weight={300}>
          {question.answer}
        </MaterialTypography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Question;
