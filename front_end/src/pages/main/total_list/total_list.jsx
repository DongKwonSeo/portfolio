import React from "react";
import "../../../scss/total_list .scss";
const List = (props) => (
  <div className="total_list">
    <h1 className="total_list__name">님의 health Log</h1>
    <ul className="total_list__total">
      <li>이번달 총 운동 시간</li>
      <li>이번주 총 운동 시간</li>
      <li>오늘 총 운동 시간 </li>
      <li>오늘 먹은 칼로리 총량</li>
    </ul>
  </div>
);

export default List;
