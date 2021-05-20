import React, { useEffect, useState, useRef } from "react";
import "../../../scss/common/modal.scss";
import axios from "axios";
// import "../../../../scss/common/modal.scss";
const Modals = ({ id, type }) => {
  const commentId = useRef(1);
  const [workout, setWorkout] = useState({
    create: "02.12",
    workout_type: "조깅",
    hour: "2",
    workout_calorie: "120kcal",
    _id: "1",
  });

  const [meals, setMeals] = useState({
    _id: 1,
    create: "02.12",
    meal_type: "아침",
    mealDesc: ["수박"],
    calorie: 200,
  });
  const [comments, setcomments] = useState([
    {
      _id: "",
      comment: "계속 운동 해주세요",
      user: "60a125dfa801204acd2810d5",
      content: "60a125dfa801204acd2810d5",
      onModel: "Meals",
    },
  ]);

  const [postcomments, setpostcomments] = useState({
    comment: "",
    user_id: "60a125dfa801204acd2810d5",
  });

  useEffect(() => {
    getData();
  }, []);

  const getmeals = async () => {
    try {
      const response = await axios.get(`http://localhost:3601/api/meals/${id}`);
      let meals = response.data.data;
      meals.time = Time(meals.create);
      meals.create = getMD(meals.create);

      meals.calorie = meals.calorie + "kal";

      setMeals(meals);
      setcomments(meals.comments);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get(`http://localhost:3601/api/meals/${id}`) //
    //   .then((result) => {
    //     console.log(result);
    //     console.log({ data: result.data.data });
    //     let meals = result.data.data;

    //     meals.time = Time(meals.create);
    //     meals.create = getMD(meals.create);
    //     // console.log({ item });
    //     //날짜
    //     // getMD()
    //     //칼로리
    //     meals.calorie = meals.calorie + "kal";

    //     setMeals(meals);
    //     setcomments(meals.comments);
    //   });
  };
  const getData = () => {
    if (type === "meals") {
      getmeals();
    } else if (type === "workout") {
      getWorkout();
    }
  };
  const getWorkout = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3601/api/workout/${id}`
      );
      const workout = response.data.data;
      workout.create = getMD(workout.create);
      workout.workout_calorie = workout.workout_calorie + "kal";

      setWorkout(workout);
      setcomments(workout.comments);
    } catch (error) {
      console.log(error);
    }
    // await axios
    //   .get(`http://localhost:3601/api/workout/${id}`) //
    //   .then((result) => {
    //     // console.log({ result });
    //     // console.log({ data: result.data.data });
    //     const workout = result.data.data;
    //     workout.create = getMD(workout.create);
    //     workout.workout_calorie = workout.workout_calorie + "kal";

    //     setWorkout(workout);
    //     setcomments(workout.comments);
    //   });
  };

  function getMD(create) {
    const d = new Date(create);
    const md = d.getMonth() + 1 + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  }
  function Time(create) {
    const time = create.split("T")[1];
    const time2 = time.split(".")[0];
    return time2;
  }

  const sand = async () => {
    try {
      // const response = await axios.put(
      //   `http://localhost:3601/api/${type}/${id}`,
      //   postcomments
      // );
      // getData();
      setcomments((state) => state.concat(postcomments));
      console.log(comments);
    } catch (e) {
      console.log(e);
    }

    // "user_id": "60a125dfa801204acd2810d5"
  };
  const commet_Change = (e) => {
    setpostcomments({
      comment: e.target.value,
      _id: "60a125dfa801204acd2810d5",
    });
    console.log(postcomments);
  };

  return (
    <div className="modal">
      <div className="modal__wrap">
        {type === "workout" ? (
          <table className="modal__table">
            {/* workout 테이블 */}
            <thead>
              <tr>
                <th>날짜</th>
                <th>운동종류</th>
                <th>운동시간</th>
                <th>소비칼로리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{workout.create}</td>
                <td>{workout.workout_type}</td>
                <td>{workout.hour}</td>
                <td>{workout.workout_calorie}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          // meals table
          <table className="modal__table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>식사시간</th>
                <th>식사 분류</th>
                <th>칼로리</th>
              </tr>
            </thead>
            <tbody>
              {/* 날짜	식사시간	아침/점심/저녁	식단 내역	칼로리 */}
              <tr>
                <td>{meals.create}</td>
                <td>{meals.meal_type}</td>
                <td>{meals.mealDesc}</td>
                <td>{meals.calorie}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* 댓글  */}
        <form action="#" className="comment" onSubmit={sand}>
          <h2 className="comment__title">코멘트 남기기</h2>
          <input
            className="comment__input"
            type="text"
            placeholder="댓글을 입렵해주세요!"
            onChange={commet_Change}
            value={postcomments.comment}
          />
          <button className="comment__sumit" onClick={sand}>
            등록
          </button>
          <div className="comment__list">
            <h2 className="comment__title">{comments.length}</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment._id}>{comment.comment}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modals;
