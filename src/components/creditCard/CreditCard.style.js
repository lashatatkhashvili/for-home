import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  savedCardWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 10px',
    border: '2px solid #354739',
    width: '100%',
    cursor: 'pointer',
  },
  savedCardIcon: {
    marginRight: theme.spacing(2),
  },
  cardNumberDots: {
    marginRight: theme.spacing(1),
    letterSpacing: '-4px',
  },
  isCardActive: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));