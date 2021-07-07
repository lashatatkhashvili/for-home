import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#F8FCFA',
    border: '1px dashed #A8A596',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  buttonWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}));