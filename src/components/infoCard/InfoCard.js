import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MaterialButton from '../materialButton/MaterialButton';
import PropTypes from 'prop-types';
import useStyles, {buttonTheme} from './InfoCard.style';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { ThemeProvider } from '@material-ui/core/styles';

const InfoCard = props => {
  const {title, description, buttonText, onClick} = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper}>
      <Box p={3}>
        <Grid container spacing={5} direction="column" justify="space-between" alignItems="center">
          <Grid item xs>
            <MaterialTypography variant="h6" align="center" className={classes.title} size="20px">{title}</MaterialTypography>
          </Grid>
          <Grid item xs>
            <MaterialTypography variant="body" align="center" component="p" className={classes.description} size="14px">
              {description}
            </MaterialTypography>
          </Grid>
          <Grid item style={{width: '100%'}}>
            <Box p={1}>
              <ThemeProvider theme={buttonTheme}>
                <MaterialButton variant="outlined" color="primary" onClick={onClick} fullWidth size="large">{buttonText}</MaterialButton>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}

export default InfoCard;
