import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { counterReducer } from './counterReducer';
import thunk from 'redux-thunk';
import { arrayReducer } from './arrayReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  array: arrayReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
