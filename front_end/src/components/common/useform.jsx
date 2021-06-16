import { useState } from "react";
import formValidater from "../../components/common/form_validater";

const Useform = () => {
  const [form, SetForm] = useState({
    // register
    email: "",
    name: "",
    id: "",
    passWord: "",
    // login
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
  const [error, SetError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    SetError(formValidater(form));
  };

  return { handleChange, form, handleSubmit, error };
};

export default Useform;
