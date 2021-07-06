import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MinusCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import CheckoutIcon from '@material-ui/icons/CheckOutlined';
import Input from '@material-ui/core/Input';
import currency from 'currency.js';
import { makeStyles } from '@material-ui/core/styles';

import { updateItemQuantity, removeItem } from '../modules/cart/actions';

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


const mapStateToProps = state => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateItemQuantity: (id, quantity) => {
      dispatch(updateItemQuantity({ id, quantity }));
    },
    removeItemFromCart: (id) => {
      dispatch(removeItem(id));
    }
  };
};

const CartContainer = ({
  items,
  updateItemQuantity,
  removeItemFromCart,
}) => {
  const classes = useStyles();
  const cartItems = items || [];
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <Typography component="h2" variant="h5" color="textPrimary">
          Shopping Cart
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.imageUrl} alt={item.name} width={150} height={75} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell size="small">
                    <IconButton onClick={() => { updateItemQuantity(item.id, -1) }}>
                      <MinusCircleIcon />
                    </IconButton>
                    <Input value={item.quantity} className={classes.quantityInput} />
                    <IconButton onClick={() => { updateItemQuantity(item.id, 1) }}>
                      <AddCircleIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {currency(item.totalPrice).format()}
                  </TableCell>
                  <TableCell>
                    <IconButton color="secondary" onClick={() => { removeItemFromCart(item.id) }}>
                      <DeleteForeverRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.checkoutSection}>
          <div>
            <Typography variant="subtitle1" component="h2">
              Total Amount:
            </Typography>
            <Typography variant="h5" component="h2">
              {currency(cartItems.map(item => item.totalPrice).reduce((a, b) => a + b, 0)).format()}
            </Typography>
          </div>
          <Button
            color="primary"
            variant="contained"
            startIcon={<CheckoutIcon />}
          >
            Checkout
          </Button>
        </div>
      </Paper>
    </Container>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartContainer);