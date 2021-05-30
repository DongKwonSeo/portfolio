import React from "react";
import "../../scss/home.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { selectValue, increment, decrement } from "../../redux/testSlice";

const Home = (props) => {
  // const value = useSelector(selectValue);
  // const dispatch = useDispatch();

  return (
    <div className="home">
      <div className="home__contaier">
        <div className="home__logo">
          <img src="../imgs/home_logo.png" alt="" />
        </div>
        <div className="home__box">
          <h1>오늘의 당신은 어디까지 도달했습니까</h1>
        </div>
        {/* <h2>value: {value}</h2> */}
        {/* <button onClick={() => dispatch(increment())}>버튼 ++</button> */}
        {/* <button onClick={() => dispatch(decrement())}>버튼 --</button> */}
        {/* <button */}
        {/* onClick={() => { */}
        {/* if (value > 0) { */}
        {/* dispatch(decrement()); */}
        {/* } */}
        {/* }} */}
        {/* > */}
        {/* 버튼 -- */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default Home;
