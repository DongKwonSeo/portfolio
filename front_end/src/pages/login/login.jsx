import React from "react";
// import Footer from "../footer/footer";
import styles from "./login.module.css";
const Login = (props) => {
  return (
    <section className={styles.wrap}>
      <section className={styles.section}>
        <h1 className={styles.login}>Login</h1>
        <p className={styles.title}>나만의 건강일지를 관리하고 작성해보세요</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button}>Google</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
