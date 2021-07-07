import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: props => {
    const { rounded } = props;
    const borderRadius = rounded ? '25px' : 0;
    return {
      borderRadius: borderRadius,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    };
  },
}));
