import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({});

export default createStore(rootReducers, applyMiddleware(thunk));
