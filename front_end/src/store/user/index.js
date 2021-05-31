import axios from "axios";
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
export const setlogin = async (dataTosubmit) => {
  try {
    const request = await axios.post(
      "http://localhost:3601/api/users/login" //
    );

    // alert("로그인 성공")
  } catch (error) {
    alert("로그인 실패 다시 입력해주세요");
  }
  return {
    type: LOG_IN,
    // payload: this.request,
  };
};
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
