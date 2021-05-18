import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TotalList from "./total_list";
import "../../scss/total.scss";
import TotalTimeline from "./total_timeline";
import Modals from "../../components/layout/modals/modal";
import axios from "axios";

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
    // {
    //   id: "1",
    //   icon: <i className="fas fa-dumbbell"></i>,
    //   type: "WorkOut",
    //   desc: "조깅",
    //   cal: "100",
    //   create: "2020.05.05",
    // },
    // {
    //   id: "2",
    //   icon: <i className="fas fa-apple-alt"></i>,
    //   type: "Meal",
    //   desc: "햄버거",
    //   cal: "100",
    //   create: "2020.05.05",
    // },
  ]);
  const [isopen, setisopen] = useState(false);
  const [modalState, setmodalState] = useState({
    _id: "1",
  });

  useEffect(() => {
    getTotal();
  }, []);
  function getMD(create) {
    const d = new Date(create);
    const md = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  }
  // 두가지 데이터를  한 곳으로 불러 오는 방법
  const getTotal = async () => {
    try {
      let timelineData = [];
      const response = await axios.get(`http://localhost:3601/api/meals`);
      let meals = response.data.data;
      // meals.time = Time(meals.create);

      for (let i = 0; i < meals.length; i++) {
        meals[i].icon = <i className="fas fa-apple-alt"></i>;
        meals[i].type = "meals";
        meals[i].types = "Meal";
        meals[i].desc = meals[i].meal_desc;
        meals[i].cal = meals[i].calorie;
        //크리에이트
        meals[i].create = getMD(meals[i].create);
        timelineData.push(meals[i]);
      }
      // work out api
      const response2 = await axios.get(`http://localhost:3601/api/workout`);
      let workout = response2.data.data;
      // meals.time = Time(meals.create);
      // meals.create = getMD(meals.create);
      for (let i = 0; i < workout.length; i++) {
        const obj = {
          _id: workout[i]._id,
          icon: <i className="fas fa-dumbbell"></i>,
          type: "workout",
          types: "WorkOut",
          desc: workout[i].workout_type,

          cal: workout[i].workout_calorie,
          // create:
        };

        timelineData.push(obj);
      }

      //CREATE SORT
      settimeLine(timelineData);
      // id: "2",
      // icon: <+melas.length; className="fas fa-apple-alt"></+melas.length;>,
      // type: "Meal",
      // desc: "햄버거",
      // cal: "100",
      // create: "2020.05.05",
    } catch (error) {
      console.log(error);
    }
  };

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
                {timeLine.map((timeLines) => (
                  <TotalTimeline
                    timeLines={timeLines} //
                    key={timeLines._id}
                    isopen={isopen}
                    setisopen={setisopen}
                    setmodalState={setmodalState}
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
