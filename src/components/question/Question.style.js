import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  panelRoot: {
    '&:before': {
      display: 'none',
    },
    margin: '0 !important',
  },
  panelSummaryRoot: {
    padding: '0 !important',
    minHeight: 'auto !important',
  },
  panelSummaryContent: {
    margin: '10px 0 !important',
  },
  panelDetailsRoot: {
    padding: '10px !important',
    opacity: 0.7,
  },
}));