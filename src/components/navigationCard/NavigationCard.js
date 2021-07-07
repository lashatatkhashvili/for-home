import React from 'react';
import useStyles from './NavigationCard.style';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const NavigationCard = props => {
  const { image, icon, title, link, onClick } = props;
  const classes = useStyles();

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <CardMedia image={image} classes={{ root: classes.navigationCardWrapper }} onClick={handleClick}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          classes={{ root: classes.navigationCard }}
        >
          <Box classes={{root : classes.navigationCardTiTleBox}}>
            <Typography variant="h5" classes={{ root: classes.title }}>
              {title}
            </Typography>
            <img src={icon} alt={icon}
                 style={{
                   position : 'absolute' ,
                   right : '39px' ,
                   bottom : '20px' ,
                   width : '30px' ,
                   height : '30px'}}
            />
          </Box>
        </Grid>
      </Link>
    </CardMedia>
  );
};

export default NavigationCard;
