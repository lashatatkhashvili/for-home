import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as Icons from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';
import useStyles from './PriceSelector.style';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const PriceSelector = props => {
  const { name, value, options, onChange } = props;

  const classes = useStyles();

  const handleChange = value => {
    if (!value) return;

    // create dummy event for changeHandler's of forms
    const event = {
      target: {
        name: name,
        value: value,
      },
    };

    onChange(event);
  };

  const findValueOption = () => {
    return options.find(option => option.value === value);
  };

  const findValueIndex = () => {
    return options.indexOf(findValueOption());
  };

  const getLeftOptions = () => {
    const valueIndex = findValueIndex();
    return [options[valueIndex - 3], options[valueIndex - 2], options[valueIndex - 1]];
  };

  const getRightOptions = () => {
    const valueIndex = findValueIndex();
    return [options[valueIndex + 1], options[valueIndex + 2], options[valueIndex + 3]];
  };

  const handleNext = () => {
    const valueIndex = findValueIndex();
    const nextOption = options[valueIndex + 1];
    if (nextOption) {
      handleChange(nextOption.value);
    }
  };

  const handlePrev = () => {
    const valueIndex = findValueIndex();
    const prevOption = options[valueIndex - 1];
    if (prevOption) {
      handleChange(prevOption.value);
    }
  };

  const valueOption = findValueOption();

  const renderOption = (item, index) => {
    return (
      <Grid key={index} item container justify="center" alignItems="center" xs={4}>
        {item && (
          <MaterialTypography
            size="16px"
            weight={500}
            className={classes.option}
            onClick={() => handleChange(item.value)}
          >
            {item.label}
          </MaterialTypography>
        )}
      </Grid>
    );
  };

  return (
    <Grid container wrap="nowrap">
      <Box className={classes.arrow} onClick={handlePrev}>
        <IconButton size="small">
          <Icons.ChevronLeft color="primary" fontSize="large" />
        </IconButton>
      </Box>
      <Grid container wrap="nowrap" className={classes.optionsWrapper}>
        <Grid container>{getLeftOptions().map(renderOption)}</Grid>
        <Box className={classes.selectedOption}>
          <MaterialTypography size="32px" weight={500} color="primary">
            {valueOption && valueOption.label}
          </MaterialTypography>
        </Box>
        <Grid container>{getRightOptions().map(renderOption)}</Grid>
      </Grid>
      <Box className={classes.arrow}>
        <IconButton size="small" onClick={handleNext}>
          <Icons.ChevronRight color="primary" fontSize="large" />
        </IconButton>
      </Box>
    </Grid>
  );
};

PriceSelector.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default PriceSelector;
