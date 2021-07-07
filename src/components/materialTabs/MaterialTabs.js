import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';

import classes from './MaterialTabs.style';

const MaterialTabs = props => {
  const { pathname, tabs, classes, t, ...rest } = props;

  return (
    <Tabs value={pathname}>
      {tabs.map((tab, index) => {
        const { label, value, component: Component, to, onClick, icon, tabClassName } = tab;
        return (
          <Tab
            key={index}
            label={t(label)}
            value={value}
            component={Component}
            to={to}
            classes={{ wrapper: `${classes.tabWrapper} ${tabClassName}` }}
            onClick={onClick}
            icon={icon}
          />
        );
      })}
    </Tabs>
  );
};

MaterialTabs.propTypes = {
  pathname: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      // component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

export default withTranslation('translations')(withStyles(classes)(MaterialTabs));
