import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../scss/layout.scss";
import "../../../scss/header.scss";

const Header = (props) => {
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
