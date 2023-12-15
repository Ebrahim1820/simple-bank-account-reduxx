import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// To use Middleware "Thunk" first need to
// install it by 'npm i redux-thunk'

const rootReduxer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create a store
const store = createStore(
  rootReduxer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
