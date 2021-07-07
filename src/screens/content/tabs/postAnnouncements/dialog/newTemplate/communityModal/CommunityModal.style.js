import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  dialogTitle: {
    // background: 'red',
    padding: '16px 24px',
  },

  dialogContent: {
    // background: 'blue',
    // width: '600px',
  },

  closeButton: {
    cursor: 'pointer',
  },

  communityModalLoaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
}));
