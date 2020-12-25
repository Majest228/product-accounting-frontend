import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'max-content',
    gap: theme.spacing(2),
  },
}));

const ButtonsContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.buttons}>{children}</div>;
};
export default ButtonsContainer;
