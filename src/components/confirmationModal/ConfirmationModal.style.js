import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  closeButton: {
    ontSize: '14px',
    padding: '10px 32px',
    background: '#fff',
    borderRadius: '8px',

    '&:hover': {
      ontSize: '14px',
      padding: '10px 32px',
      background: '#fff',
      borderRadius: '8px',
    },
  },

  confirmButton: {
    borderRadius: '8px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: '#5ebe84',
    fontSize: '14px',
    padding: '10px 32px',
    marginLeft: '32px',

    '&:hover': {
      borderRadius: '8px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
      backgroundColor: '#5ebe84',
      fontSize: '14px',
      padding: '10px 32px',
      marginLeft: '32px',
    },
  },

  confirmationModalDialogContent: {
    width: '416px',
    padding: theme.spacing(3),
  },
}));
