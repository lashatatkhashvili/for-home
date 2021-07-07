import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listWrapper: {
    background: '#fff',
    width: '100%',
    height: '100%',
    border: '1px solid rgba(46, 53, 55, 0.5)',
    // opacity: 0.5,
    padding: '15px 17px',
  },

  list: {
    fontSize: '12px',
    fontWeight: 300,
    color: '#2E3537',
  },

  listItem: {
    height: '30px',
  },
}));
