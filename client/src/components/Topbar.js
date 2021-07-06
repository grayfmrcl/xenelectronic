import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => history.push('/')}
        >
          <HomeIcon className={classes.icon} />
          <Typography variant="h6" noWrap>
            Home
          </Typography>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => history.push('/cart')}
        >
          <ShoppingCartIcon className={classes.icon} />
          <Typography variant="h6" noWrap>
            Cart
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
