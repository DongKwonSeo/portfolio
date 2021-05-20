import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,

  reducers: {
    // action: 뭘 어떻게 하겠냐.. 라고 적혀있는 문서! (javascript object)
    // action 함수: action을 만듬
    // dispatch: action을 redux에 보냄
    // redux: action의 type을 참고해, 적절한 reducer를 실행히킨다
    // reducer: redux 중 현재 slice의 store를 수정한다.
    // selector: redux의 전체 store중 필요한 부분을 가져온다.
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
