import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

import classes from './MaterialSelect.styles';

const BootstrapInput = withStyles(theme => ({
  input: {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 1px rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const MaterialSelect = props => {
  const { items, value, onChange, filterName, label, classes } = props;

  return (
    <FormControl style={{ width: '100%' }} classes={{ root: classes.formControlRoot }}>
      <InputLabel
        classes={{ shrink: classes.shrinkedLabel }}
        className={classes.label}
        id="demo-customized-select-label"
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        classes={{ root: classes.select }}
        value={value}
        onChange={event => onChange(event.target.value, filterName)}
        input={<BootstrapInput />}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          elevation: 6,
          classes: { paper: classes.wrapper, list: classes.list, root: classes.select },
        }}
      >
        <MenuItem value="" className={classes.menuItem} classes={{ selected: classes.activeItem }}>
          <em>None</em>
        </MenuItem>
        {items.map(item => (
          <MenuItem
            key={item.text}
            value={item.text}
            className={classes.menuItem}
            classes={{ selected: classes.activeItem }}
          >
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withStyles(classes)(MaterialSelect);
