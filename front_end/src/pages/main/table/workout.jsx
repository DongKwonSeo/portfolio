import React, { useState, useEffect } from "react";
import styles from "./workout.module.css";
import WorkoutsItem from "./workouts_item";
import ModalWorkout from "../../../modals/workout/modal_workout";
import axios from "axios";

/*
{
    "success": true,
    "data": [
        {
            "create": "2021-03-11T01:36:41.391Z",
            "_id": "6048f59c2afd81eebb2130d9",
            "workout_type": "헬스",
            "hour": 3,
            "workout_calorie": 135,
            "user": "6043c0fb032f6022cda5c18a",
            "workout_comments": [],
            "__v": 0
        },
        ...
    ]
}
*/

const Workout = (props) => {
  const [isopen, setisopen] = useState(false);
  const [modalWorkoutState, setModalWorkoutState] = useState({
    create: "-_-?;;;",
    workout_type: "-_-?;;;",
    hour: "-_-?;;;",
    workout_calorie: "-_-?;;;",
  });
  const [modal, setModal] = useState("");
  // 접속 하자마자.. 뭔가 하고 싶다-> componentDidMount -> useEffect hook을 쓴다!

  //내가 저장한걸 접속 하자마자  보고싶다
  useEffect(() => {
    console.log("-_-?");

    // 저장한걸 get http://localhost:3601/api/workout 가지고 온다
    axios.get("http://localhost:3601/api/workout").then((result) => {
      // console.log({ result });
      // console.log({ data: result.data.data });
      const workout = result.data.data;
      // 그리고 workout list 넣어 준다

      //날짜랑 칼로리만 다시 만들어 준다 <- !!!
      // 에.. 우ㅉ면 좋을까요?
      // 함수 만든건 여기다 넣어준 당ㅁㅇ,
      // 어떠게 너죠?
      // 호출..
      // 리스트... 의 모든 것을.. 이케이케 해주고 싶다!
      // -> 반복문

      //날짜랑 칼로리만 다시 만들어 준다 <- !!!
      console.log("workout.length", workout.length);
      for (let i = 0; i < workout.length; i++) {
        const item = workout[i];
        // item.id = i;
        console.log(item);
        item.create = getMD(item.create);
        // console.log({ item });
        //날짜
        // getMD()
        //칼로리
        item.workout_calorie = item.workout_calorie + "kal";
      }

      setWorkout(workout);
    });
  }, []); // useEffect의 성질을 사용한 꼼수! 입니다

  function getMD(create) {
    const d = new Date(create); //지금 시간? 데이터 객체를 지금시간으로 만들어 준다
    const md = d.getMonth() + 1 + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  }

  const [workout, setWorkout] = useState([
    {
      id: "1",
      create: "02.12",
      workout_type: "조깅",
      hour: "2",
      workout_calorie: "120kcal",

      //   <th>날짜</th>
      //   <th>운동 종류</th>
      //   <th>운동 시간</th>
      //   <th>소비 칼로리</th>
    },
    {
      id: "???", // ???
      date: "3.11", // getMD(create)
      workout_type: "헬스", // workout_type
      hour: 3, // hour
      workout_calorie: 135, //workout_calorie+'kcal'
    },
  ]);
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>날짜</th>
            <th>운동 종류</th>
            <th>운동 시간</th>
            <th>소비 칼로리</th>
          </tr>
        </thead>

        <tbody>
          {workout.map((work, i) => (
            <WorkoutsItem
              key={i} //
              work={work}
              setModal={setModal}
              isopen={isopen}
              setisopen={setisopen}
              setModalWorkoutState={setModalWorkoutState}
            />
          ))}
        </tbody>
      </table>

      {isopen ? (
        <ModalWorkout
          create={modalWorkoutState.create}
          workout_type={modalWorkoutState.workout_type}
          hour={modalWorkoutState.hour}
          workout_calorie={modalWorkoutState.workout_calorie}
        />
      ) : null}

      <br />
      <p>{modal}</p>
    </>
  );
};

export default Workout;
