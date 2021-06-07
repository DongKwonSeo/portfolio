import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user";

const reducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
