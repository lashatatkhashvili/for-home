import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    position: 'relative',
    border: '1px solid rgba(46,53,55,0.1)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[8],
    },
    '&:hover .hoverLayer': {
      display: 'flex',
    },
  },
  hoverLayer: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: '#fff',
  },
  hoverLayerText: {
    position: 'relative',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '50px',
      height: '17px',
      borderLeft: '2px solid #88816C',
      borderTop: '2px solid #88816C',
    },
    '&::before': {
      top: '-10px',
      left: '-20px',
    },
    '&::after': {
      right: '-20px',
      bottom: '-10px',
      transform: 'rotate(180deg)',
    },
  },
  cardMedia: {
    width: '100%',
    paddingBottom: '70%',
  },
  titleWrapper: {
    margin: '-23px 15px 15px 15px',
    padding: '5px 15px',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    opacity: 0.8,
    height: '64px',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  },
  divider: {
    height: '2px',
    backgroundColor: '#b2d1c1',
    margin: '0 30px 15px 30px',
  },
  priceWrapper: {
    height: '40px',
    marginTop: '15px',
  },
}));