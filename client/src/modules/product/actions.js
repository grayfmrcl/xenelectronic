import request from '../../requests';

export const fetchProducts = () => dispatch => {
  dispatch({ type: 'FETCH_PRODUCT_REQUEST' });
  request.get('/products')
    .then((res) => {
      console.log('FETCH PRODUCT', res);
      dispatch({
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: res.data.data,
      })
    })
    .catch((err) => {
      console.error('ERROR FETCH PRODUCT', err);
      dispatch({
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: err,
      })
    });
}