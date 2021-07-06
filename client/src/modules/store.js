import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import products from './product/reducers';
import cart from './cart/reducers';

const rootReducers = combineReducers({
  products,
  cart,
});

export default createStore(rootReducers, applyMiddleware(thunk));
