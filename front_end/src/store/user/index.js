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
const AUTH = "user/auth";

// 3.action creater 액션 생성자 함수 정의
export const setlogout = () => ({ type: LOG_OUT });
// export const setauth = () => ({ type: AUTH });
export const setlogin = () => {
  return { type: LOG_IN };
};

export const login = (loginInfo) => async (dispatch, state) => {
  try {
    const response = await axios.post(
      "http://localhost:3601/api/users/login",
      {
        user_id: loginInfo.user_id,
        password: loginInfo.password,
      },
      { withCredentials: true }
    );
    // .then((response) => response.data);
    console.log(response.data);
    // 쿠키 값 X_AUTH 출력하기
    // AXIOS CONFIG 구성 하기 (헤더에 쿠키값 넣기)

    alert(`${response.data.user.name}님이 로그인 하였습니다.`);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};
// auth action
export const auth = () => async (dispatch, state) => {
  try {
    const response = await axios.get(
      "http://localhost:3601/api/users/auth",

      {
        withCredentials: true,
       
      }
    );
    return {
      type: AUTH,
      payload: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      type: AUTH,
      payload: error.response.data,
    };
  }
};

// 4 reducer 함수
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loginSuccess: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggined: false,
      };
    case AUTH:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
