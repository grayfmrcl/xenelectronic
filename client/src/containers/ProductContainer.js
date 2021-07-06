/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '../components/Grid';
import { fetchProducts } from '../modules/product/actions';

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
    }
  };
};

const ProductContainer = ({
  products,
  fetchProducts,
}) => {
  const classes = useStyles();
  
  useEffect(() => { fetchProducts() }, [])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid productList={products} />
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);