import React, { useState } from "react";
import formValidater from "../../components/common/form_validater";

const Useform = () => {
  const [form, SetForm] = useState({
    user_id: "",
    password: "",
    username: "",
    // createMeal
    mealDesc: "",
    calorie: "",
    mealType1: "",
    mealType2: "",
    mealType3: "",
    mealType: "",
    // Workout
    workoutType: "",
    hour: "",
    workoutCalorie: "",
  });
  const [error, SetError] = useState({
    user_id: 0,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Seterror(formValidater(form));
    SetError({
      ...error,
      user_id: 3,
    });

    if (error.user_id || error.password) return;
  };

  return { handleChange, form, handleSubmit, error, SetError };
};

export default Useform;
