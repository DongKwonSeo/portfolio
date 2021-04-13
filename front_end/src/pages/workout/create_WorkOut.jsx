// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import Container from "../main/container/container";
import styles from "./create_WorkOut.module.css";
import axios from "axios";

const CreateWorkOut = (props) => {
  const [workout_type, setworkout_type] = useState("");
  const [hour, sethour] = useState("");
  const [workout_calorie, setworkout_calorie] = useState("");
  // // workout_type, hour, workout_calorie, user_id

  //  save 누르면
  const save = (e) => {
    e.preventDefault();

    // axios 서버에 보낸다!
    axios
      .post("http://localhost:3601/api/workout", {
        // meal_type,
        // calorie,
        // meal_desc,
        // user_id,

        // workout_type: "수영..",
        // hour: 5,
        // workout_calorie: 120,
        // user_id: "6043c0fb032f6022cda5c18a",

        workout_type: workout_type,
        hour: hour,
        workout_calorie: workout_calorie,
        user_id: "6043c0fb032f6022cda5c18a",
      })
      .then((response) => {
        console.log(response.data);
        // response
      })
      .catch((error) => {
        console.log(error);
      });

    // form reset!
    clearAll();

    console.log(workout_type, hour, workout_calorie);
  };

  // const clearAll; // clearAll이라는 const를 선언해주고, 초기화는 안 해줌
  // const clearAll

  //  = // assign 혹은 initializer

  // 이거는.. 익명함수를 선언한 것. // 익명함수란? 함수긴 한데 이름이 없음.
  // () => {
  //   sethour("");
  //   setworkout_type("");
  //   setworkout_calorie("");
  // };

  // 익명 함수 즉시 실행
  // (()=>{ console.log('-_-?'); })();
  const clearAll = () => {
    sethour("");
    setworkout_type("");
    setworkout_calorie("");
  };



  return (
    <>
      <h1>운동 등록</h1>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.form_padding}>
            <h2>운동 종류</h2>
            <form action="">
              <input
                type="text"
                placeholder="오늘 먹은 음식을 등록해주세요"
                value={workout_type}
                onChange={(e) => setworkout_type(e.target.value)}
              />
            </form>
          </div>
          <div className={styles.form_padding}>
            <h2>운동 소요시간</h2>
            <form action="">
              <input
                type="select"
                placeholder="운동 소요시간"
                value={hour}
                onChange={(e) => sethour(e.target.value)}
              />
            </form>
          </div>
          <div className={styles.form_padding}>
            <h2>소모 칼로리</h2>
            <form action="">
              <input
                type="text"
                placeholder="소비한 칼로리를 입력해주세요"
                value={workout_calorie}
                onChange={(e) => setworkout_calorie(e.target.value)}
              />
            </form>
          </div>
          <button onClick={save}>저장</button>
        </div>
      </Container>
    </>
  );
};

export default CreateWorkOut;
