import React from 'react';
import styles from './List.module.scss';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/images/icons/delete.svg';
import useStyles from './List.style';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';

const List = props => {
  const {
    className,
    items,
    errors,
    onButtonClick,
    onItemClick,
    renderItem,
    buttonIcon,
    // listItemClass
  } = props;
  const classes = useStyles();

  const handleItemClick = index => {
    if (onItemClick) onItemClick(index);
  };

  const handleButtonClick = (index, event) => {
    event.stopPropagation(); // doesn't pass click event to handleItemClick
    if (onButtonClick) onButtonClick(index);
  };

  return (
    <Box className={`${classes.listWrapper} ${className}`}>
      <Box className={classes.list}>
        {items.map((item, index) => {
          return (
            item && (
              <Box
                key={index}
                // className={`${styles.infoItem} ${listItemClass}`}
                onClick={() => handleItemClick(index)}
                className={classes.listItem}
              >
                <MaterialTypography variant="subtitle2" size="12px" weight="300">
                  {renderItem(item, index)}
                </MaterialTypography>
                <img
                  className={styles.button}
                  src={buttonIcon}
                  alt={buttonIcon}
                  onClick={event => handleButtonClick(index, event)}
                />
              </Box>
            )
          );
        })}
      </Box>
      {errors && <div className={styles.infoItemsError}>{errors}</div>}
    </Box>
  );
};

List.defaultProps = {
  buttonIcon: deleteIcon,
};

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  errors: PropTypes.string,
  onButtonClick: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string,
  onItemClick: PropTypes.func,
  listItemClass: PropTypes.string,
};

export default List;
