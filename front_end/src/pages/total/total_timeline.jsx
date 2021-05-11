import React from "react";
import "../../scss/totalTimeline.scss";
const TotalTimeline = ({ timeLines }) => {
  return (
    <div className="totalTimeline">
      <div className="totalTimeline__wrap">
        <ul className="totalTimeline__list">
          <li>{timeLines.color}</li>
          <li>{timeLines.type}</li>
          <li>{timeLines.desc}</li>
          <li>{timeLines.cal}Kcal</li>
          <li>{timeLines.create}</li>
        </ul>
      </div>
    </div>
  );
};

export default TotalTimeline;
