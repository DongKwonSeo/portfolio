import { createSlice } from "@reduxjs/toolkit";
// 초기 값 설정
const initialState = {
  isLoggined: false,
  //   userData: {},
  // userData: {
  // userId: "",
  // email: "",
  // phone: 0,
  // nickname: "",
  // },
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // extraReducers:(builder)
});

export default useSlice;

