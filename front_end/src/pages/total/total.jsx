import React, { useState } from "react";
import { Link } from "react-router-dom";
import TotalList from "./total_list";
import "../../scss/total.scss";
import TotalTimeline from "./total_timeline";

const Total = (props) => {
  const [total_list, settotal_list] = useState([
    {
      id: "1",
      hour: "3", //
      turm: "DAILY",
      name: "이번달 운동시간",
    },
    {
      id: "2",
      hour: "10", //
      turm: "WEEKLY",
      name: "이번달 운동시간",
    },

    {
      id: "3",
      hour: "10", //
      turm: "MONTHLY",
      name: "이번달 운동시간",
    },
    {
      id: "4",
      hour: "50", //
      turm: "TOTAL",
      name: "이번달 운동시간",
    },
  ]);
  const [timeLine, settimeLine] = useState([
    {
      id: "1",
      color: "빨강",
      type: "Meal",
      desc: "햄버거",
      cal: "100",
      create: "2020.05.05",
    },
    {
      id: "2",
      color: "빨강",
      type: "Meal",
      desc: "햄버거",
      cal: "100",
      create: "2020.05.05",
    },
  ]);
  return (
    <section className="total">
      <div className="total__container">
        <div className="total__wrap">
          {total_list.map((total) => (
            <TotalList total={total} key={total.id} />
          ))}
        </div>
        <div className="total__wrapper">
          <div className="total__box">
            <h2 className="total__title">Time Line</h2>
            <Link to="/Main">
              <h2 className="total__h2">자세히 확인하기</h2>
            </Link>
          </div>
          <div className="total__wrap2">
            {timeLine.map((timeLines) => (
              <TotalTimeline
                timeLines={timeLines} //
                key={timeLines.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Total;