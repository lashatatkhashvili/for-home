import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  successMessage: {
    backgroundColor: '#354739',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  successMessageIcon: {
    marginRight: theme.spacing(2)
  }
}));