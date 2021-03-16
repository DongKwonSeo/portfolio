import React from "react";
import styles from "./meals.module.css";
const Meals = (props) => (
  <>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>날짜</th>
          <th>운동종류</th>
          <th>운동시간</th>
          <th>소비칼로리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>20.3.10</td>
          <td>조깅</td>
          <td>3.20pm</td>
          <td>200kcal</td>
        </tr>
      </tbody>
    </table>
  </>
);
export default Meals;
