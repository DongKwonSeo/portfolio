import React from "react";
import styles from "./meals.module.css";
const Meals = (props) => (
  <>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>날짜</th>
          <th>식사시간</th>
          <th>아침/점심/저녁</th>
          <th>식단 내역</th>
          <th>칼로리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>20.3.10</td>
          <td>3.20pm</td>
          <td>저녁</td>
          <td>돈까스</td>
          <td>300kcal</td>
        </tr>
      </tbody>
    </table>
  </>
);
export default Meals;
