import React from "react";

const ModalMeal = (props) => {
  return (
    <div className>
      <h1>
        <img src="../imgs/logo2.png" alt="" width="40%" />
      </h1>
      <table className>
        <thead>
          <tr>
            <th>날짜</th>
            <th>식사시간</th>
            <th>아침/점심/저녁</th>
            <th>식단 내역</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20.3.10</td>
            <td>3.20pm</td>
            <td>저녁</td>
            <td>돈까스</td>
            <td>300kcal</td>
          </tr>
        </tbody>
      </table>
      <div className="div">
        <h2>코멘트 남기기</h2>
        <form action="#">
          <input type="text" placeholder="댓글을 입렵해주세요!" />
        </form>
      </div>
      <div className="div">
        <h2>댓글1</h2>
        <form action="#">
          <input type="text" placeholder="댓글을 입렵해주세요!" />
        </form>
      </div>
    </div>
  );
};

export default ModalMeal;
