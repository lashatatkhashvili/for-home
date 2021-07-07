import React from 'react';
import useStyles from './OccasionBox.style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MaterialTypography from '../materialTypography/MaterialTypography';

const OccasionBox = props => {
  const classes = useStyles();
  const { occasion, onSelect, isSelect } = props;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`${classes.occasionBox} ${isSelect ? 'selected' : null}`}
      onClick={onSelect}
    >
      <Grid item>
        <img src={occasion.image} alt={occasion.name} />
      </Grid>

      <Box mt={2}>
        <MaterialTypography size="16px" weight={500}>
          {occasion.name}
        </MaterialTypography>
      </Box>
    </Grid>
  );
};

export default OccasionBox;
