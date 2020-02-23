import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';

import useStyles from './style';

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment key="footer">
      <footer className={classes.footer}>
        <MenuList className={classes.navigation}>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-1" className={classes.link}>
              Navigation 1
            </Link>
          </MenuItem>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-2" className={classes.link}>
              Navigation 2
            </Link>
          </MenuItem>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-3" className={classes.link}>
              Navigation 3
            </Link>
          </MenuItem>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-4" className={classes.link}>
              Navigation 4
            </Link>
          </MenuItem>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-5" className={classes.link}>
              Navigation 5
            </Link>
          </MenuItem>
          <MenuItem className={classes.navigationItem}>
            <Link variant="button" href="/navigation-6" className={classes.link}>
              Navigation 6
            </Link>
          </MenuItem>
        </MenuList>
      </footer>
    </Fragment>
  );
};

export default Footer;
