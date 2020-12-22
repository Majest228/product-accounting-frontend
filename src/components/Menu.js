import React from 'react';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Apps, HomeWork } from '@material-ui/icons';
import RouteButton from './RouteButton';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const MenuItem = (props) => <ListItem button {...props} />;

const Menu = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <RouteButton to="/categories" component={MenuItem}>
            <ListItemIcon>
              <Apps />
            </ListItemIcon>
            <ListItemText primary="Категории" />
          </RouteButton>
          <RouteButton to="/manufacturer" component={MenuItem}>
            <ListItemIcon>
              <HomeWork />
            </ListItemIcon>
            <ListItemText primary="Фирмы" />
          </RouteButton>
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
