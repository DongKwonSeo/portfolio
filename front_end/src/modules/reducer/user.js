import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../actions";

// 초기 값 설정
const initialState = {
  isLoggined: false,
  userData: { name: "", email: "", user_id: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, (state, actions) => {
        const { name, email, user_id } = actions.payload.user;
        state.userData = { name, email, user_id };
        state.isLoggined = true;
      })
      .addCase(login.rejected, (state, actions) => {
        state.isLoggined = false;
      })
      .addCase(logout.fulfilled, (state, actions) => {
        state.isLoggined = false;
        state.userData = {};
      })
      .addCase(logout.rejected, (state, actions) => {
        state.isLoggined = true;
      }),
});

export default userSlice;
