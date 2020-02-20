import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './style';

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment key="footer">
      <footer className={classes.footer}>
        <MenuList className={classes.navigation}>
          <MenuItem className={classes.navigationItem}>Navigation 1</MenuItem>
          <MenuItem className={classes.navigationItem}>Navigation 2</MenuItem>
          <MenuItem className={classes.navigationItem}>Navigation 3</MenuItem>
          <MenuItem className={classes.navigationItem}>Navigation 4</MenuItem>
          <MenuItem className={classes.navigationItem}>Navigation 5</MenuItem>
          <MenuItem className={classes.navigationItem}>Navigation 6</MenuItem>
        </MenuList>
      </footer>
    </Fragment>
  );
};

export default Footer;
