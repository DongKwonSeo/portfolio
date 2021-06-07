import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { auth } from "../store/user";
import { useHistory } from "react-router-dom";

const authcheck = function (SpecificComponent, option, adminRoute = null) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지

  // SpecificComponent 보여줄 컴포넌트
  // option 인증이 필요한 한지 안하는지 체크
  // adminRoute 특정 사용하 type 을 넣어주기 위해

  function AuthenticationCheck(props) {
    // const dispatch = useDispatch();
    const history = useHistory();
    // const [cookies, setCookie, removeCookie] = useCookies(["check"]);
    // const { cookies } = props;
    // const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

    useEffect(() => {
      const setLogin = async () => {
        // await dispatch(auth(history, option));
      };
      setLogin();

      // async function setLogin() {
      //   await dispatch(auth(history));
      // }
      // setLogin();
    }, []);

    return <SpecificComponent {...props} />;
  }

  return AuthenticationCheck;
};

export default authcheck;
