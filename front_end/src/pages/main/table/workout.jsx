import React, { useState, useEffect } from "react";
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
    create: null,
    workout_type: null,
    hour: null,
    workout_calorie: null,
  });

  useEffect(() => {
    // 저장한걸 get http://localhost:3601/api/workout 가지고 온다
    axios
      .get("http://localhost:3601/api/workout") //
      .then((result) => {
        // console.log({ result });
        // console.log({ data: result.data.data });
        const workout = result.data.data;
        for (let i = 0; i < workout.length; i++) {
          const item = workout[i];
          // item.id = i;
          console.log(item);
          item.create = getMD(item.create);
          item.workout_calorie = item.workout_calorie + "kal";
          item.hour = item.hour + "h";
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
    // {
    //   id: "???", // ???
    //   date: "3.11", // getMD(create)
    //   workout_type: "헬스", // workout_type
    //   hour: 3, // hour
    //   workout_calorie: 135, //workout_calorie+'kcal'
    // },
  ]);
  return (
    <>
      <table className="main_table">
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
              isopen={isopen}
              setisopen={setisopen}
              setModalWorkoutState={setModalWorkoutState}
            />
          ))}
        </tbody>
      </table>
      {/* modal */}
      <>
        {isopen ? (
          <ModalWorkout
            create={modalWorkoutState.create}
            workout_type={modalWorkoutState.workout_type}
            hour={modalWorkoutState.hour}
            workout_calorie={modalWorkoutState.workout_calorie}
          />
        ) : null}
      </>
    </>
  );
};

export default Workout;
