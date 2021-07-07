import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  chatRoomItem: {
    flexWrap: 'nowrap',
    cursor: 'pointer',
    padding: '10px 22px',

    '&:hover': {
      background: 'rgba(230, 207, 192, 0.2)',
    },
  },

  active: {
    background: 'rgba(230, 207, 192, 0.2)',
  },

  avatar: {
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.04)',
  },

  avatarBadge: {
    backgroundColor: '#C6011B',
    width: '12px',
    height: '12px',
    border: '2px solid #FFFFFF',
  },
}));
