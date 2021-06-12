import React, { useEffect, useState } from "react";
import "../../../scss/style.scss";
import axios from "axios";
// import "../../../../scss/common/modal.scss";
const Modals = ({ id, type }) => {
  const [workout, Setworkout] = useState({
    create: "02.12",
    workout_type: "조깅",
    hour: "2",
    workout_calorie: "120kcal",
    _id: "1",
  });

  const [meals, Setmeals] = useState({
    _id: 1,
    create: "02.12",
    meal_type: "아침",
    meal_desc: ["수박"],
    calorie: 200,
  });
  const [comments, Setcomments] = useState([
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
    user_id: "",
  });

  useEffect(() => {
    getData();
  }, []);

  // Meals API 가져오기
  const getmeals = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3601/api/meals/${id}`);
      let meals = data.infor;
      meals.time = Time(meals.create);
      meals.create = getMD(meals.create);

      Setmeals(meals);
      Setcomments(meals.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // Workout API 가져오기
  const getWorkout = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3601/api/workout/${id}`
      );
      // const response = await axios.get(
      //   `http://localhost:3601/api/workout/${id}`
      // );
      // 날짜 변경
      const workout = data.infor;
      workout.create = getMD(workout.create);

      Setworkout(workout);
      Setcomments(workout.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // Meals or Workout = 타입 분류
  const getData = () => {
    if (type === "meals") {
      getmeals();
    } else if (type === "workout") {
      getWorkout();
    }
  };

  // 날짜 만들기
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

  const comment_sumit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3601/api/${type}/${id}`, postcomments);
      getData();
      setpostcomments({
        comment: "",
        user_id: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  const commet_Change = (e) => {
    setpostcomments({
      comment: e.target.value,
      user_id: "60a125dfa801204acd2810d5",
    });
  };

  return (
    <div className="modal__box">
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
                  <td>{workout.hour}h</td>
                  <td>{workout.workout_calorie}Kal</td>
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
                  <td>{meals.meal_desc}</td>
                  <td>{meals.calorie}Kal</td>
                </tr>
              </tbody>
            </table>
          )}

          {/* 댓글  */}
          <form action="#" className="comment" onSubmit={comment_sumit}>
            <h2 className="comment__title">코멘트 남기기</h2>
            <input
              className="comment__input"
              type="text"
              placeholder="댓글을 입렵해주세요!"
              onChange={commet_Change}
              value={postcomments.comment}
            />
            <button className="comment__sumit">등록</button>
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
    </div>
  );
};

export default Modals;
