import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import Useform from "../../components/common/useform";
import formValidater from "../../components/common/form_validater";
import "../../scss/style.scss";

const Register = (props) => {
  const history = useHistory();
  const { form, handleChange, handleSubmit, error } = Useform(formValidater);

  const reguster_sumit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        withCredentials: true,
      };
      const registerInfo = {
        user_id: form.id,
        password: form.passWord,
        email: form.email,
        name: form.name,
      };
      handleSubmit(e);
      // console.log("api통과 !!!!!");
      // await axios.post("http://localhost:3601/api/users", registerInfo, config);
      // alert("회원 가입을 성공 하였습니다 다시 로그인 해주세요! ");
      // // inputReset();
      // history.push("/login");

      if (error.id !== "") {
        await axios.post(
          "http://localhost:3601/api/users",
          registerInfo,
          config
        );
        alert("회원 가입을 성공 하였습니다 다시 로그인 해주세요! ");
        // inputReset();
        history.push("/login");
      } else {
        throw error;
      }
    } catch (err) {
      console.log(err);
      alert("회원 가입을 실패하였습니다 ");
    }
  };

  return (
    <div className="regiter">
      <form onSubmit={reguster_sumit} className="regiter__form">
        <h1>회원가입</h1>
        <div className="div">
          <Postinput
            type={"id"}
            name={"id"}
            value={form.id}
            onChange={handleChange}
            placeholder={"ID"}
          />
          {error.id !== "" && <p>{error.id}</p>}

          {console.log(error.id)}

          <Postinput
            type={"password"}
            name={"passWord"}
            value={form.passWord}
            onChange={handleChange}
            placeholder={"password"}
          />
          {error.id !== "" && <p>{error.id}</p>}
          <Postinput
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={handleChange}
            placeholder={"email"}
          />
          {error.id !== "" && <p>{error.id}</p>}
          <Postinput
            type={"name"}
            name={"name"}
            value={form.name}
            onChange={handleChange}
            placeholder={"name"}
          />
          <Button children={"회원가입"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
