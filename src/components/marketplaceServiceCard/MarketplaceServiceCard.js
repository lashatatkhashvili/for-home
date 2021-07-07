import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import useStyles from './MarketplaceServiceCard.style';
import CardMedia from '@material-ui/core/CardMedia';
import MaterialTypography from '../materialTypography/MaterialTypography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { getIn } from 'formik';

const MarketplaceServiceCard = props => {
  const { t, item } = props;
  const image = getIn(item, 'images.0.image');
  const classes = useStyles();

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <CardMedia image={image} className={classes.cardMedia}/>
        <Paper elevation={5} className={classes.titleWrapper}>
          <MaterialTypography size="24px" weight={500} className={classes.title} color="primary" align="center">
            {item.title}
          </MaterialTypography>
        </Paper>
        <Box p={3} pt={1}>
          <MaterialTypography size="14px" weight={300} className={classes.description} align="center">
            {item.description}
          </MaterialTypography>
          <Box className={classes.priceWrapper}>
            {item.type === 0 && (
              <>
                <Divider className={classes.divider}/>
                <MaterialTypography size="16px" weight={400} align="center">
                  {`${t('Starting from')}: ${item.startingPrice}`}
                </MaterialTypography>
              </>
            )}
          </Box>
        </Box>
        <Box className={`${classes.hoverLayer} hoverLayer`}>
          <MaterialTypography size="32px" weight={500} color="primary" className={classes.hoverLayerText}>
            {t('Choose service')}
          </MaterialTypography>
        </Box>
      </Paper>
    </>
  );
};

MarketplaceServiceCard.propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default withTranslation('translations')(MarketplaceServiceCard);
