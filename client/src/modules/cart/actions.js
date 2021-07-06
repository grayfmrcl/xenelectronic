export const addToCart = item => dispatch => {
  console.log('ADD_TO_CART', item);
  dispatch({
    type: 'ADD_TO_CART',
    payload: item,
  });
}

export const updateItemQuantity = item => dispatch => {
  console.log('UPDATE_ITEM_QTY', item);
  dispatch({
    type: 'UPDATE_ITEM_QTY',
    payload: item,
  })
}

export const removeItem = itemId => dispatch => {
  console.log('REMOVE_ITEM', itemId);
  dispatch({
    type: 'REMOVE_ITEM',
    payload: itemId,
  })
}

export const resetCart = () => dispatch => {
  console.log('RESET_CART');
  dispatch({ type: 'RESET_CART' })
}
