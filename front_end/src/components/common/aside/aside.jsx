import React from "react";
import styles from "./aside.module.css";
import { Link } from "react-router-dom";

const Aside = (props) => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <li>
          <Link to="/workout">
            <i className="fas fa-dumbbell"></i>
          </Link>
        </li>
        <li>
          <Link to="/meal">
            <i className="fas fa-hamburger"></i>
          </Link>
        </li>
        <li>
          <i className="fas fa-user"></i>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
