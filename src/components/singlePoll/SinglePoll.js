import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { withTranslation } from 'react-i18next';
import { Box, Typography, Radio } from '@material-ui/core';

import MaterialButton from '../materialButton/MaterialButton';
import classes from './SinglePoll.styles';

const SinglePoll = props => {
  const { text, votes, totalVotes, hasMostVotes, onVoteToggle, hasUserVoted, t, classes } = props;
  const percentage = totalVotes ? Math.round(Number(votes / totalVotes) * 100) : 0;

  return (
    <Box display="flex">
      <MaterialButton className={classes.button} disableRipple onClick={onVoteToggle}>
        <Box className={`${classes.voteInfo} ${hasUserVoted && classes.activePoll}`}>
          {hasUserVoted && (
            <Box
              style={{ opacity: hasMostVotes ? '0.5' : '0.2', width: `${percentage}%` }}
              className={classes.voteBackgroundWrapper}
            >
              <Box className={classes.voteBackground} />
            </Box>
          )}
          <Typography className={classes.text}>{text}</Typography>
          {hasUserVoted && <Typography className={classes.votes}>{`${votes} ${t('Votes')}`}</Typography>}
        </Box>
      </MaterialButton>
      <Box className={classes.statWrapper}>
        {hasUserVoted ? (
          <Typography className={classes.percentage}>{percentage}%</Typography>
        ) : (
          <Radio color="primary" className={classes.radio} onChange={onVoteToggle} />
        )}
      </Box>
    </Box>
  );
};

SinglePoll.propTypes = {
  text: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  onVoteToggle: PropTypes.func.isRequired,
  hasUserVoted: PropTypes.bool.isRequired,
  hasMostVotes: PropTypes.bool,
};

export default withStyles(classes)(withTranslation('translations')(SinglePoll));
