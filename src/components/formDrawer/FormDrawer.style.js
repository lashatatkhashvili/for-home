import { makeStyles } from '@material-ui/styles';
import ornament from '../../assets/images/sideDrawerOrnament.png';

export default makeStyles(theme => ({
  drawerRoot: {
    width: '320px',
    backgroundImage: `url(${ornament})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: '100% auto'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#354739',
    color: '#fff'
  },
  title: {
    width: '100%',
    fontWeight: 500,
  },
  closeButton: {
    color: '#fff'
  }
}));