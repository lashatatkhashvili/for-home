import React from 'react';
import { withStyles, Box } from '@material-ui/core';

import classes from '../Survey.styles';
import VoteInfo from '../../../../../components/VoteInfo/VoteInfo';

const OptionsVoteStatistics = ({ options, total }) => {
  return (
    <Box mt={1}>
      {options &&
        options.map(opt => {
          return (
            <Box key={opt.id} mb={3}>
              <VoteInfo label={opt.name} totalVotes={total} voteCount={opt.participantsCount} />
            </Box>
          );
        })}
    </Box>
  );
};

export default withStyles(classes)(OptionsVoteStatistics);
