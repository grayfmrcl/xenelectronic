const cartInitState = {
  items: [],
};

const reducer = (state = cartInitState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = [...state.items].findIndex((item) => item.id === action.payload.id);
      const newItems = [...state.items];

      if (existingItemIndex < 0) {
        newItems.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      } else {
        newItems[existingItemIndex].quantity += action.payload.quantity;
        newItems[existingItemIndex].totalPrice += (action.payload.price * action.payload.quantity);
      }
      return { items: newItems };
    }
    case 'UPDATE_ITEM_QTY': {
      const existingItemIndex = [...state.items].findIndex((item) => item.id === action.payload.id);
      const newItems = [...state.items];

      if (existingItemIndex < 0) {
        return { items: newItems };
      }

      newItems[existingItemIndex].quantity += action.payload.quantity;
      newItems[existingItemIndex].totalPrice = (newItems[existingItemIndex].price
        * newItems[existingItemIndex].quantity);

      return { items: newItems.filter((item) => item.quantity > 0) };
    }
    case 'REMOVE_ITEM': {
      const newItems = [...state.items];
      return { items: newItems.filter((item) => item.id !== action.payload) };
    }
    case 'RESET_CART': {
      return { items: [] };
    }
    default:
      return state;
  }
};

export default reducer;
