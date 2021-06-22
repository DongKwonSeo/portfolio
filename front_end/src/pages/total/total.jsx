import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TotalList from "./total_list";
import "../../scss/total.scss";
import { getTotal } from "../../modules/actions";
import TotalTimeline from "./total_timeline";
import Modals from "../../components/layout/modals/modal";
// const calculateTimeline = (timeline) => {
//   // for (let i = 0; timeline.length; i++) {}
// };

const Total = (props) => {
  const dispatch = useDispatch();
  const { timeline, workouts } = useSelector((state) => state.timeInfor);

  const [totalLists, setTotalList] = useState([
    {
      id: "1",
      hour: "3", //
      term: "daily",
      name: "오늘 운동시간",
    },
    {
      id: "2",
      hour: "10", //
      term: "weekly",
      name: "이번주 총운동시간",
    },
    {
      id: "3",
      hour: "10", //
      term: "monthly",
      name: "이번달 총 운동시간",
    },
    {
      id: "4",
      hour: "50", //
      term: "total",
      name: "총 운동시간",
    },
  ]);
  const [isopen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({});

  const [totalTimeline, setTotalTimeline] = useState({
    daily: "",
    weekly: "",
    monthly: "",
    total: "",
  });

  // Time line
  //workOut 만 순회를 해서 계산한다
  // 오늘인지 내일인지
  //
  const calculateTimeline = (workouts) => {
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;

    let totalTime = {};

    for (let i = 0; workouts.length > i; i++) {
      const {
        hour: { createdAt, hour },
      } = workouts[i];

      const date = new Date(createdAt).getDate();
      // const month = new Date(createdAt).getMonth() + 1;

      if (date === 22) {
        console.log(hour);
        totalTime.daily += hour; // calcDateTime = calcDateTime + hour;
      }
      // if (month === currentMonth) {
      //   console.log(workouts[i]);
      // totalTime.month += hour;
      // }
    }
    // Array.map((item, i) => {...});
    // for (let item of workouts) {}

    setTotalTimeline(totalTime);
  };

  // 비동기 !
  useEffect(() => {
    async function fetchData() {
      console.log("fetch data");
      const {
        payload: { workoutData },
      } = await dispatch(getTotal());

      calculateTimeline(workoutData);
    }
    fetchData();
  }, []);

  return (
    <section className="total">
      <div className="total__container">
        <div className="total__wrap">
          {totalLists.map((totalList) => (
            <TotalList
              totalList={totalList}
              key={totalList.id}
              calculateList={totalTimeline}
            />
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
                {timeline.map((item) => (
                  <TotalTimeline
                    timeLines={item} //
                    key={item._id}
                    isopen={isopen}
                    setIsOpen={setIsOpen}
                    setModalState={setModalState}
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
