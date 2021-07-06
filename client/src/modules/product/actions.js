import request from '../../requests';

const fetchProducts = () => (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCT_REQUEST' });
  request.get('/products')
    .then((res) => {
      dispatch({
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: err,
      });
    });
};

export default fetchProducts;
