import { createSlice } from "@reduxjs/toolkit";
import { authHandler } from "../actions";

const initialState = {
  isAuth: false,
};

const authHandlerSlice = createSlice({
  name: "authHandler",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(authHandler.pending, (state, actions) => {})
      .addCase(authHandler.fulfilled, (state, actions) => {
        state.isAuth = true;
        console.log("sucess");
      })
      .addCase(authHandler.rejected, (state, actions) => {
        state.isAuth = false;
        console.log("falied");
      }),
});

export default authHandlerSlice;
