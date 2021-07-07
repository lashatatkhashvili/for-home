import React, { useEffect, useState } from 'react';
import { withStyles, Box, Container, Drawer, Typography, List, ListItemText, ListItem } from '@material-ui/core';
import IconsTab from './components/IconsTab';
import ConfirmationModal from './components/ConfirmationModal';

const WivTools = props => {
  const { classes } = props;
  const menuItems = ['Icons', 'Confirmation_Modal'];
  let [tab, setTab] = useState('Icons');
  useEffect(() => {}, []);
  const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  };
  return (
    <div className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paperAnchorLeft: classes.drawer,
        }}
        anchor="left"
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text} selected={text === tab}>
              <ListItemText
                primary={text}
                onClick={() => {
                  setTab(text);
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <TabPanel value={tab} index="Icons">
          <IconsTab />
        </TabPanel>
        <TabPanel value={tab} index="Confirmation_Modal">
          <ConfirmationModal />
        </TabPanel>
      </main>
    </div>
  );
};
const classes = {
  container: {
    width: '100%',
  },
  drawer: {
    width: 240,
  },
  content: {
    width: '100%',
    paddingLeft: 240,
    background: '#F7F7F7',
  },
};

export default withStyles(classes)(WivTools);
