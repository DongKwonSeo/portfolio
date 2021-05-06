import axios from "axios";
import React, { useEffect, useState } from "react";
import MealsItem from "./meals_item";

const Meals = (props) => {
  const [meals, setMeals] = useState([
    {
      create: null,
      id: "1",
      hour: null,
      date: null,
      meal_type: null,
      mealDesc: [""],
      calorie: null,
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3601/api/meals") //
      .then((result) => {
        console.log(result);
        console.log({ data: result.data.data });
        const meals = result.data.data;
        for (let i = 0; i < meals.length; i++) {
          const item = meals[i];
          // item.id = i;
          console.log(item);
          item.create = getMD(item.create);
          // console.log({ item });
          //날짜
          // getMD()
          //칼로리
          item.calorie = item.calorie + "kal";
        }
        setMeals(meals);
      });
  }, []);
  function getMD(create) {
    const d = new Date(create); //지금 시간? 데이터 객체를 지금시간으로 만들어 준다
    const md = d.getMonth() + 1 + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
    return md;
  }

  return (
    <>
      <table className="main_table">
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
          {meals.map((meal, a) => (
            <MealsItem key={a} meal={meal} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Meals;
