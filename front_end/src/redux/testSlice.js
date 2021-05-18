import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,

  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      //   decrement < 0 ? (state.value = 0) : state.value--;
      // 리듀서가 뭐냐?
      // 리듀서 함수의 첫번째 파라미터인 state는 뭐냐?
      // 리듀서는 뭐고 액션은 뭐냐? -> 참고로 둘 다 함수임
      // 그렇다면, 리듀서 함수의 리턴값은 뭐고, 액션 함수으 리턴값은 뭐냐?
      //   if (state.value > 0) {
      //     state.value--;
      //   }    
      state.value--;
    },
  },
});

export const { increment, decrement } = testSlice.actions;

export const selectValue = (state) => state.test.value;

export default testSlice.reducer;
