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

  newNotePlaceholderWrapper: {
    marginRight: '24px',
  },

  newNoteButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  calendarIcon: {
    color: '#88816c',
    cursor: 'pointer',
  },
}));
