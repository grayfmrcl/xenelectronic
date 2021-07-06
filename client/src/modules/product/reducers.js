const productsInitState = {
  loading: false,
  error: {},
  data: [],
};

const products = (state = productsInitState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true,
        error: {},
        data: [],
      };
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: {},
        data: action.payload,
      };
    case 'FETCH_PRODUCT_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default products;
