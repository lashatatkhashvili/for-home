import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  occasionBox: {
    width: '128px',
    height: '128px',
    border: '1px solid rgba(46,53,55,0.2)',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.08)',
    cursor: 'pointer',

    '&.selected, &.selected:hover': {
      border: '2px solid #354739',
    },

    '&:hover': {
      border: 'none',
      backgroundColor: '#FBEBDE',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.16)',
      cursor: 'pointer',
    },
  },

  selectedBox: {
    // border: 'none',
    // backgroundColor: '#FBEBDE',
    // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.16)',
    // cursor: 'pointer',

    // border: '2px solid #354739',
  },
}));
