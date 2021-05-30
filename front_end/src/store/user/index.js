// 초기 값 설정
const initialState = {
  isLoggined: false,
  info: {
    userId: "",
    name: "",
    email: "",
  },
};

// 2.action type 상수로 정리
const LOG_IN = "user/login";
const LOG_OUT = "user/logout";

// 3.action creater 액션 생성자 함수 정의
export const setlogin = () => ({ type: LOG_IN });
export const setlogout = () => ({ type: LOG_OUT });

// const setlogin = () => {
//   return { type: "user/login" };
// };

// 4 reducer 함수
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggined: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggined: false,
      };
    default:
      return state;
  }
}
