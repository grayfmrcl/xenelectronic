import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import { products  } from './product/reducers';

const rootReducers = combineReducers({
  products,
});

export default createStore(rootReducers, applyMiddleware(thunk));
