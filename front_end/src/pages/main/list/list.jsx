import React from "react";
import styles from "./list.module.css";

const List = (props) => (
  <>
    <h1 className={styles.title}>서동권님의 health Log</h1>
    <ul className={styles.list}>
      <li className={styles.item}>이번달 총 운동 시간</li>
      <li className={styles.item}>이번주 총 운동 시간</li>
      <li className={styles.item}>오늘 총 운동 시간 </li>
      <li className={styles.item}>오늘 먹은 칼로리 총량</li>
    </ul>
  </>
);

export default List;
