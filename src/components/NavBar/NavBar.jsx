import React from 'react';
import {
  AppBar,
  IconButton,
  Badge,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='MiShop'
              height='25px'
              className={classes.image}
            />
            MiShop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
