import React from "react";
import "../../scss/style.scss";
const TotalList = ({ totalList }) => {
  return (
    <div className="total__list">
      <div className="total__list__wrap">
        <ul className="total__list__items">
          <li className="total__list__hour">{totalList.hour}hour</li>
          <li className="total__list__name">{totalList.name}</li>
          <li className="total__list__turm">{totalList.turm}</li>
        </ul>
      </div>
    </div>
  );
};

export default TotalList;
