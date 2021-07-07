import React from 'react';
import PropTypes from 'prop-types';
import ImagePicker from '../imagePicker/ImagePicker';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import useStyles from './PreviewImage.style';
import Box from '@material-ui/core/Box';
import { withTranslation } from 'react-i18next';
import MaterialTypography from '../materialTypography/MaterialTypography';

const PreviewImage = props => {
  const { t, id, name, label, error, height, previewUrl, defaultUrl, onDelete, onChange, className } = props;
  const classes = useStyles();
  const imageUrl = previewUrl ? previewUrl : defaultUrl;

  return (
    <Box display="flex" flexDirection="column" style={{ height: height }}>
      <Grid container justify="space-between">
        <MaterialTypography variant="body2" color="primary" gutterBottom size="12px">
          {label}
        </MaterialTypography>
        {imageUrl && onDelete && (
          <MaterialTypography variant="body2" color="textPrimary" gutterBottom onClick={onDelete} size="12px">
            {t('Delete')}
          </MaterialTypography>
        )}
      </Grid>
      <Grid container className={`${classes.wrapper} ${className}`} style={imageUrl ? { border: 'none' } : null}>
        {imageUrl && <CardMedia image={imageUrl} className={classes.image} />}

        {!imageUrl && (
          <Grid container alignItems="center" justify="center" className={classes.buttonWrapper}>
            <ImagePicker buttonVariant={imageUrl && 'contained'} id={id} name={name} onChange={onChange} />
          </Grid>
        )}
      </Grid>
      {error && (
        <Box mt={0.2}>
          <MaterialTypography variant="caption" color="error" size="12px">
            {error}
          </MaterialTypography>
        </Box>
      )}
    </Box>
  );
};

PreviewImage.defaultProps = {
  height: '200px',
};

PreviewImage.propTypes = {
  height: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  defaultUrl: PropTypes.string,
  previewUrl: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default withTranslation('translations')(PreviewImage);
