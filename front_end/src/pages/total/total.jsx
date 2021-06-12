import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TotalList from "./total_list";
import "../../scss/total.scss";
import TotalTimeline from "./total_timeline";
import Modals from "../../components/layout/modals/modal";
import axios from "axios";

const Total = (props) => {
  const [totalList, SettotalList] = useState([
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
  const [timeLines, SettimeLine] = useState([]);
  const [isopen, Setisopen] = useState(false);
  const [modalState, SetmodalState] = useState({});

  const getMD = (create) => {
    const d = new Date(create);
    const md = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  };

  // 두가지 데이터를  한 곳으로 불러 오는 방법
  const getTotal = async () => {
    try {
      let timelineData = [];
      const response1 = await axios.get(`http://localhost:3601/api/meals`);
      let meals = response1.data.infor;
      for (let i = 0; i < meals.length; i++) {
        const obj = {
          _id: meals[i]._id,
          icon: <i className="fas fa-apple-alt"></i>,
          type: "meals",
          display_type: "Meal",
          desc: meals[i].meal_desc,
          cal: meals[i].calorie,
          create: (meals[i].create = getMD(meals[i].create)),
        };
        meals[i].create = getMD(meals[i].create);
        timelineData.push(obj);
      }
      // work out api
      const response2 = await axios.get(`http://localhost:3601/api/workout`);
      let workout = response2.data.infor;
      for (let i = 0; i < workout.length; i++) {
        const obj = {
          _id: workout[i]._id,
          icon: <i className="fas fa-dumbbell"></i>,
          type: "workout",
          display_type: "WorkOut",
          desc: [workout[i].workout_type],
          cal: workout[i].workout_calorie,
          hour: workout[i],
          create: (workout[i].create = getMD(workout[i].create)),
          // create:
        };
        // console.log(obj.hour, "시간시간");
        timelineData.push(obj);
      }
      //CREATE SORT
      SettimeLine(timelineData);
    } catch (error) {
      console.log(error);
    }
  };
  // 비동기 !
  useEffect(() => {
    getTotal();
  }, [SettimeLine]);

  return (
    <section className="total">
      <div className="total__container">
        <div className="total__wrap">
          {totalList.map((total) => (
            <TotalList total={total} key={total.id} />
          ))}
        </div>
        <div className="total__wrapper">
          <div className="total__box">
            <h2 className="total__title">Time Line</h2>
            <Link to="/total/detail">
              <h2 className="total__h2">자세히 확인하기</h2>
            </Link>
          </div>

          <div className="total__wrap2">
            <table className="total__wrap2__table">
              <thead className="total__wrap2__thead">
                <tr>
                  <th>아이콘</th>
                  <th>TYPE</th>
                  <th>DESC</th>
                  <th>CAL</th>
                  <th>CREATE</th>
                </tr>
              </thead>
              <tbody>
                {timeLines.map((timeLine) => (
                  <TotalTimeline
                    timeLines={timeLine} //
                    key={timeLine._id}
                    isopen={isopen}
                    Setisopen={Setisopen}
                    SetmodalState={SetmodalState}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isopen ? <Modals id={modalState._id} type={modalState.type} /> : null}
    </section>
  );
};

export default Total;
