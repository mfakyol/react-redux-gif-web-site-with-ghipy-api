import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from './reducers/rootReducer';
import thunk from 'redux-thunk';

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducers,{categories: []}, allEnhancers);

export default store;
