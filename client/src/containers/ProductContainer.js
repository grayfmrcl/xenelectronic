/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '../components/Grid';
import { fetchProducts } from '../modules/product/actions';
import { addToCart } from '../modules/cart/actions';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    addToCart: (product) => {
      const item = {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1
      }
      dispatch(addToCart(item));
    }
  };
};

const ProductContainer = ({
  products,
  fetchProducts,
  addToCart,
}) => {
  const classes = useStyles();
  
  useEffect(() => { fetchProducts() }, [])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid productList={products} addToCart={addToCart} />
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);