import React from "react";
import styles from "./workout.module.css";

const Workout = (props) => {
  return (
    <div className={styles.wrap}>
      <div className="table">
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
      </div>
      <div className="div">
        <h2>코멘트 남기기</h2>
        <form action="#">
          <input type="text" placeholder="댓글을 입렵해주세요!" />
        </form>
      </div>
      <div className="div">
        <h2>댓글1</h2>
        <form action="#">
          <input type="text" placeholder="댓글을 입렵해주세요!" />
        </form>
      </div>
    </div>
  );
};

export default Workout;
