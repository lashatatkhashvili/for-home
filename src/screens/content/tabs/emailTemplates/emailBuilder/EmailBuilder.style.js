import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  emailBuilderWrapper: {
    // maxWidth: '1168px',
    // maxWidth: '1300px',
    maxWidth: '1056px',
    width: '100%',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.08)',
    margin: '16px auto',
    // height: '100%',
  },

  emailBuilderHeadWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
  },

  emailBuilderInput: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'transparent',
    },

    '& .MuiFormLabel-root': {
      color: 'rgba(46, 53, 55, 0.8)',
    },

    '& label': {
      fontSize: '24px',
    },

    '& .MuiInputLabel-shrink': {
      fontSize: '15px',
      fontWeight: 500,
      color: '#5ebe84',
    },

    '& .MuiFilledInput-underline:before': {
      borderBottom: 'none',
    },

    '& .MuiFilledInput-underline:after': {
      borderBottom: 'none',
    },

    '& input': {
      borderRadius: '4px',
      background: 'rgba(103, 129, 137, 0.05)',
      fontSize: '24px',
      color: 'rgba(46, 53, 55, 0.8)',

      '&:focus': {
        background: 'rgba(94, 190, 132, 0.05)',
      },
    },
  },

  submitButton: {
    background: '#5cb895 !important',
    width: '161px',
    height: '40px',
    borderRadius: '8px',
    marginBottom: '8px',
  },

  emailBuilderLoader: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
}));
