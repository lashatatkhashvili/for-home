import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  loaderWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    // height: '410px',
  },

  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));
