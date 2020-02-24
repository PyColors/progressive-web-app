import { AppBar, Toolbar } from '@material-ui/core';
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Logo } from './components';
import Link from '@material-ui/core/Link';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  const getCurrentTime = () => {
    let today = new Date();
    let time = ('0' + today.getHours()).slice(-2) + ':' + ('0' + today.getMinutes()).slice(-2);
    let currentTime = time;
    return currentTime;
  };

  return (
    <Fragment key="header">
      <AppBar position="fixed">
        <Grid container className={classes.toolbar}>
          <Grid item xs={6}>
            <Toolbar>
              <Link variant="button" href="/" className={classes.link}>
                <Logo />
              </Link>
            </Toolbar>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.currentTitme}>{getCurrentTime()}</p>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
};

export default Header;
