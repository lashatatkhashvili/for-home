import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  profileOverviewCardWrapper: {
    borderRadius: '8px',
    border: 'solid 1px rgba(46, 53, 55, 0.2)',
    backgroundColor: '#fff',
    // display: 'flex',
    // flexDirection: 'column',
    // height: '100%',
  },

  profileOverviewCardLabel: {
    borderRadius: '4px',
    boxShadow: '0 1px 3px 0 rgba(136, 129, 108, 0.16)',
    backgroundColor: '#faf6f2',
    padding: '6px 16px',
  },

  secondaryLabel: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));
