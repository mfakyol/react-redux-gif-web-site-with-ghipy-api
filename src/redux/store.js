import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
