import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducer/user";
import authHandlerSlice from "./reducer/authhandler";

const reducer = combineReducers({
  user: userSlice.reducer,
  auth: authHandlerSlice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
