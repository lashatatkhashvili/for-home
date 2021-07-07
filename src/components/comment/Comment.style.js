import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
  name: {
    lineHeight: 1,
  },
  textBox: {
    backgroundColor: '#E4F3E9',
    borderRadius: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
}));