import { makeStyles } from '@material-ui/styles';
import ornamentImage from '../../assets/images/infoCardOrnament.png';
import { createMuiTheme } from '@material-ui/core/styles';
import globalTheme from '../../styles/Theme';

export default makeStyles(theme => ({
  paper: {
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${ornamentImage})`,
    backgroundColor: '#2E3537',
    width: '100%',
  },
  title: {
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontWeight: 300,
  },
}));

export const buttonTheme = createMuiTheme({
  ...globalTheme,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: '1px solid #DEC8BA',
      },
    },
  },
  palette: {
    primary: {
      main: '#DEC8BA',
    },
  },
});