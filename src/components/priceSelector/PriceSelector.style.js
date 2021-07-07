import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    flexShrink: 0,
  },
  option: {
    opacity: 0.5,
    cursor: 'pointer',
  },
  selectedOption: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    minWidth: '50px',
    margin: '0 20px',
  },
}));
