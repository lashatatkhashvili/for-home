import { makeStyles } from '@material-ui/styles';
import backgroundPath from '../../assets/images/icons/home/path.svg';

export default makeStyles(theme => ({
  navigationCardWrapper: {
    height: '152px',
    width: '256px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.16)',
    marginRight: '33px',
    marginBottom: '10px',
    borderRadius : '8px',
    '&:last-child': {
      marginRight: 0,
    },

  },

  navigationCard: {
    height: '100%',
    background: 'linear-gradient(135deg, rgba(131,138,142,0.5) 0%, #4C5255 100%)',
    borderRadius : '8px',
    position : 'relative',
    transition: '0.2s',
    '&:hover' : {
      background : 'none',
      boxShadow: '0 0 0 2px #f8d0b6',
      outline : 'none',
    }
  },

  title: {
    color: '#2e3537',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal',
    marginLeft : '23px',

  },
  navigationCardTiTleBox : {
    width : '100%',
    height : '60px',
    left : 0,
    bottom : 0,
    position : 'absolute',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom : '8px',
    // borderBottomLeftRadius : '8px',
    // borderBottomRightRadius : '8px',
    backgroundImage: `url(${backgroundPath})`,
    backgroundSize : '100%'
  },
  navigationCardIcon : {
    width : '32px',
    height : '32px',
    position: 'absolute',
    right: '38px',
    bottom: '22px'
  }
}));
