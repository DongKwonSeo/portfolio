import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/layout.scss";
import "../../../scss/header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__nav">
        <h1 className="header__logo">
          <Link to={"/"}>
            <img className="logo" src="../imgs/logo.jpg" alt="logo" />
          </Link>
        </h1>
        <div className="login">
          <img className="login__img" src="../imgs/login.jpeg" alt="login" />
        </div>
      </div>
    </header>
  );
};

export default Header;
