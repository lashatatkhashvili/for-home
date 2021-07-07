import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

import classes from './CardPreview.style';

const CardPreview = props => {
  const { classes, t, title, description, image, navigateTo } = props;

  return (
    <CardMedia image={image} className={classes.wrapper}>
      <Box classes={{ root: classes.layer }} className="label-wrapper">
        <Box classes={{ root: classes.contentWrapper }}>
          <Typography classes={{ root: classes.label }}>{t(title)}</Typography>
          <Divider classes={{ root: classes.line }} />
        </Box>
      </Box>

      <Box className={`${classes.descriptionWrapper} description-wrapper`}>
        <Typography classes={{ root: classes.descriptionLabel }}>{t(title)}</Typography>
        <Typography classes={{ root: classes.description }}>{t(description)}</Typography>
        <Link className={classes.chooseBtn} to={navigateTo}>
          {t('Choose Lecture')}
        </Link>
      </Box>
    </CardMedia>
  );
};

CardPreview.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    navigateTo: PropTypes.string,
  }),
};

export default withTranslation('translations')(withStyles(classes)(CardPreview));
