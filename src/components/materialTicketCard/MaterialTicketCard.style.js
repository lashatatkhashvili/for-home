export default theme => ({
  cardWrapper: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.08)',
    border: '1px solid rgba(46,53,55,0.1)',
    background: '#fff',
    height: '169px',

    '&:hover': {
      // backgroundColor: '#8A8A8A',
      // opacity: 0.1,
      background: 'rgba(138, 138, 138, 0.1)',
      cursor: 'pointer',
    },
  },

  cardContent: {
    padding: '0',
  },

  warning: {
    borderLeft: '8px solid #FFE086',
  },

  danger: {
    borderLeft: '8px solid #C6011B',
  },
});
