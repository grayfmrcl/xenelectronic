import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit">
          <ShoppingCart className={classes.icon} />
            <Typography variant="h6" noWrap>
              Cart
            </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;