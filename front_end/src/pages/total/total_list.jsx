import React from "react";
import "../../scss/common/total_list.scss";
const TotalList = ({ total }) => {
  return (
    <div className="total__list">
      <div className="total__list__wrap">
        <ul className="total__list__items">
          <li className="total__list__hour">{total.hour}hour</li>
          <li className="total__list__name">{total.name}</li>
          <li className="total__list__turm">{total.turm}</li>
        </ul>
      </div>
    </div>
  );
};

export default TotalList;
