import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/layout.scss";
import "../../../scss/aside.scss";
const Aside = (props) => {
  return (
    <div className="aside">
      <ul className="nav">
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
