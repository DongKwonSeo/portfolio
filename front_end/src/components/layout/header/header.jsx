import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { logout } from "../../../store/user";
import { useCookies } from "react-cookie";

import "../../../scss/style.scss";

const Header = (props) => {
  // const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

  function logoutHandler(e) {
    e.preventDefault();

    // dispatch(logout()) //
    //   .then((response) => {
    //     console.log(response);
    //   });
    removeCookie("x_auth");
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="../imgs/header_logo.png" alt="heaerder_logo" />
          </Link>
        </div>
      </div>
      <div className="header__inner">
        <div className="header__nav">
          <ul>
            <NavLink to="/workout" activeClassName="on">
              <li>운동 등록</li>
            </NavLink>

            <NavLink to="/meal" activeClassName="on">
              <li>식단 등록</li>
            </NavLink>
            <NavLink to="/total" activeClassName="on">
              <li>확인 하기</li>
            </NavLink>
            <NavLink to="/login" activeClassName="on">
              <li>로그인</li>
            </NavLink>
            <NavLink to="/register" activeClassName="on">
              <li>회원가입</li>
            </NavLink>
            <li>
              <button onClick={logoutHandler}>로그아웃</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
