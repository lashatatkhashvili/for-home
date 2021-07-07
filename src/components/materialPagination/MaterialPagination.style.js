import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  tablePagination: {
    // background: 'red',
    display: 'flex',
    // alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },

  tablePaginationSpacer: {
    display: 'none',
  },

  tablePaginationToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tablePaginationActions: {
    // background: 'blue',
  },
}));
