import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  tableRow: {
    cursor: 'pointer',

    '&:hover': {
      // backgroundColor: '#E6CFC0',
      background: 'rgba(230, 207, 192, 0.2)',
    },
  },
}));
