import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  form: {
    position: 'relative',
    height: '100%',
  },
  successMessage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#354739',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  successMessageIcon: {
    marginRight: theme.spacing(2)
  }
}));