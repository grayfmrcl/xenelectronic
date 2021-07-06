import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  quantityInput: {
    width: '3em',
  },
  checkoutSection: {
    marginTop: 'inherit',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const CheckoutContainer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
          Thank you for shopping in XenElectronic.
        </Typography>
        <Typography component="h1" variant="subtitle1" align="center" gutterBottom>
          May the force be with you.
        </Typography>
      </Paper>
    </Container>
  )
}

export default CheckoutContainer