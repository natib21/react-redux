// import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/Accounts/accountSlice";
import customerReducer from "./features/Customers/customerSlice";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const Store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const Store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default Store;
