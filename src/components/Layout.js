import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import Header from '../components/Header';
import Menu from '../components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    display: 'grid',
    gap: `${theme.spacing(3)}px`,
    gridAutoRows: 'max-content',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Layout = ({ children }) => {
  const clasess = useStyles();

  return (
    <div className={clasess.root}>
      <Header />
      <Menu />

      <main className={clasess.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
