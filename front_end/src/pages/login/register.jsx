import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import "../../scss/style.scss";

const Register = (props) => {
  const history = useHistory();
  const [user_id, setuser_id] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const userOnchang = (e) => {
    setuser_id(e.target.value);
  };
  const passWordOnchang = (e) => {
    setpassword(e.target.value);
  };
  const emailOnchang = (e) => {
    setemail(e.target.value);
  };
  const name_Onchang = (e) => {
    setname(e.target.value);
  };
  const inputReset = () => {
    setuser_id("");
    setpassword("");
    setemail("");
    setname("");
  };

  const reguster_sumit = async (e) => {
    e.preventDefault();

    try {
      const registerInfo = {
        user_id,
        password,
        email,
        name,
      };
      await axios.post("http://localhost:3601/api/users", registerInfo);
      alert("회원 가입을 성공 하였습니다 ");
      inputReset();
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("회원 가입을 실패하였습니다 ");
    }
  };

  return (
    <div className="regiter">
      <section className="regiter__form">
        <h1>회원가입</h1>
        <div className="div">
          <Postinput
            type={"id"}
            value={user_id}
            onchange={userOnchang}
            placeholder={"ID"}
          />
          <Postinput
            type={"password"}
            value={password}
            onchange={passWordOnchang}
            placeholder={"password"}
          />
          <Postinput
            type={"name"}
            value={email}
            onchange={emailOnchang}
            placeholder={"email"}
          />
          <Postinput
            type={"email"}
            value={name}
            onchange={name_Onchang}
            placeholder={"name"}
          />
          <Button children={"회원가입"} handleClick={reguster_sumit} />
        </div>
      </section>
    </div>
  );
};

export default Register;
