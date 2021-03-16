import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.img}>
        <Link to={"/"}>
          <img src="../imgs/logo.jpg" alt="logo" />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
