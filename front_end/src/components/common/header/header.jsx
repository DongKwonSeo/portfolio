import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.login} onClick={onLogout}>
        Google
      </button>
    )}
    <img src="../imgs/logo.jpg" alt="logo" />
  </header>
);

export default Header;
