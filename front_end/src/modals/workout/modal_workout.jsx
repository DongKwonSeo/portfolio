import React from "react";
import "../../scss/modal_workout.scss";
const ModalWorkout = ({ create, workout_type, hour, workout_calorie }) => {
  return (
    <div className="modal">
      <div className="modal__wrap">
        <table>
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
              <td>{create}</td>
              <td>{workout_type}</td>
              <td>{hour}</td>
              <td>{workout_calorie}</td>
            </tr>
          </tbody>
        </table>
        {/* table */}

        <div className="modal__comment">
          <div className="comment">
            <h2 className="comment__title">코멘트 남기기</h2>
            <input
              className="comment__input"
              type="text"
              placeholder="댓글을 입렵해주세요!"
            />
          </div>
          <div className="div">
            <h2>댓글1</h2>
            <form action="#">
              <input type="text" placeholder="댓글을 입렵해주세요!" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWorkout;
