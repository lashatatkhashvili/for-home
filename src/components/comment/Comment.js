import React from 'react';
import { displayDateFromNow } from '../../utils/helpers';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useStyles from './Comment.style';

const Comment = props => {
  const { comment } = props;
  const { user } = comment;
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap">
      <Grid item>
        <Avatar src={user.avatar} className={classes.avatar} />
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Typography variant="subtitle1" color="textPrimary" className={classes.name}>
            {user.name}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {displayDateFromNow(comment.created)}
          </Typography>
          <Box py={1.5} px={2} mt={0.5} className={classes.textBox}>
            <Typography variant="body2" color="textPrimary">
              {comment.comment}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
