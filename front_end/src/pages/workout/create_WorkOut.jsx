import React from "react";
import Container from "../main/container/container";
import styles from "./create_WorkOut.module.css";

const CreateWorkOut = (props) => (
  <>
    <h1>운동 등록</h1>
    <Container>
      <div className={styles.wrap}>
        <div className={styles.form_padding}>
          <h2>운동 종류</h2>
          <form action="">
            <input type="text" placeholder="오늘 먹은 음식을 등록해주세요" />
          </form>
        </div>
        <div className={styles.form_padding}>
          <h2>운동 소요시간</h2>
          <form action="">
            <input type="select" placeholder="운동 소요시간" />
          </form>
        </div>
        <div className={styles.form_padding}>
          <h2>소모 칼로리</h2>
          <form action="">
            <input type="text" placeholder="소비한 칼로리를 입력해주세요" />
          </form>
        </div>
        <button>저장</button>
      </div>
    </Container>
  </>
);

export default CreateWorkOut;
