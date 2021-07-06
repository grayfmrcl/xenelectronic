export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: item,
  });
};

export const updateItemQuantity = (item) => (dispatch) => {
  dispatch({
    type: 'UPDATE_ITEM_QTY',
    payload: item,
  });
};

export const removeItem = (itemId) => (dispatch) => {
  dispatch({
    type: 'REMOVE_ITEM',
    payload: itemId,
  });
};

export const resetCart = () => (dispatch) => {
  dispatch({ type: 'RESET_CART' });
};
