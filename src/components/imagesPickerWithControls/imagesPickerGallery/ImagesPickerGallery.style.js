export default theme => ({
  title: {
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 0,
  },
  closeButton: {
    display: 'flex',
    marginLeft: 14,
    textTransform: 'none',
  },
  selected: {
    backgroundColor: '#F8D0B6',
    boxShadow: '0 4px 8px 2px rgba(230, 207, 192, 0.32)',
    color: '#fff',
    borderRadius: 30,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 9,
  },
  imgCont: {
    width: 152,
    height: 96,
    margin: 8,
    borderRadius: 10,
    position: 'relative',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid transparent',
    '&.selected': {
      borderColor: '#F8D0B6',
    },
    '& .imgHover': {
      opacity: 0,
      textAlign: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#2e35379e',
      paddingTop: 60,
      '&::before': {
        content: '""',
        display: 'block',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: 30,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 8,
        left: 8,
        boxSizing: 'border-box',
      },
    },
    '&:hover .imgHover': {
      opacity: 1,
      transition: 'opacity 300ms',
    },
  },
  imgViewBtn: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    '&:hover ': {
      textDecoration: 'underline',
    },
  },
  chip: {
    height: 22,
    margin: '0 4px',
  },
});
