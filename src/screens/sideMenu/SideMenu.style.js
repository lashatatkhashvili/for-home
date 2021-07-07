// import ornamentImage from '../../assets/images/sideMenuOrnament.png';

export default theme => ({
  drawerRoot: {
    width: '100%',
    height: '100%',
    padding: '15px 0 15px 0'
  },
  drawerPaper: {
    position: 'initial',
    width: '100%',
    height: '100%',
    borderRight: 'none',
    zIndex: 10,
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.08)',
    borderRadius: '0 8px 8px 0'
  },

  listItemsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },

  sideMenuListItem: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '18px',

    '&:hover, &:hover svg': {
      borderRadius: '8px',
      boxShadow: '0 0 8px 2px rgba(188, 226, 201, 0.33)',
      backgroundColor: '#ddf0e4',
      color: '#000',
    },
  },

  sideMenuListItemIcon: {
    width: '27px',
    height: '27px',
    color: '#969a9b',

    '&:hover': {
      color: '#000',
    },
  },

  navItemsToolTip: {
    fontSize: '14px',
  },
});
