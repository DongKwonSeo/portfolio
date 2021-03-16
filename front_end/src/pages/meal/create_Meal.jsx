import React from "react";
import Container from "../main/container/container";
import styles from "./create_Meal.module.css";
const CreateMeal = (props) => {
  return (
    <>
      <h1>식단 등록</h1>
      <Container>
        <div className={styles.wrap}>
          <img src="../imgs/logo2.png" alt="" width="40%" />
          <div className={styles.meals}>
            <div>
              <h2>음식 종류</h2>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  placeholder="오늘 먹은 음식을 등록해주세요"
                />
              </form>
            </div>
            <div className={styles.meal}>
              <h2>분류</h2>
              <button>아침</button>
              <button>점심</button>
              <button>저녁</button>
            </div>
            <div>
              <h2>칼로리</h2>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  placeholder="칼로리를 입력해주세요 ex.125kcal"
                />
              </form>
            </div>
            <button className={styles.save}>저장</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateMeal;
