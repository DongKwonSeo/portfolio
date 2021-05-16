import React from "react";
import "../../../../scss/common/modal.scss";
const Modals = ({ create, workout_type, hour, workout_calorie }) => {
  return (
    <div className="modal">
      <div className="modal__wrap">
        <table className="modal__table">
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
              <td>{create}나나나</td>
              <td>{workout_type}</td>
              <td>{hour}</td>
              <td>{workout_calorie}</td>
            </tr>
          </tbody>
        </table>

        <form action="#" className="comment">
          <h2 className="comment__title">코멘트 남기기</h2>
          <input
            className="comment__input"
            type="text"
            placeholder="댓글을 입렵해주세요!"
          />
          <button className="comment__sumit">등록</button>
          <div className="comment__list">
            <h2 className="comment__title">댓글1</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modals;
