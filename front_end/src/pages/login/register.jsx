import React, { useState } from "react";
import Button from "../../components/common/button";
import { useDispatch } from "react-redux";
import Postinput from "../../components/common/post_input";
import "../../scss/style.scss";

const Register = (props) => {
  const dispatch = useDispatch();
  const [user_id, setuser_id] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");

  const user_Onchang = (e) => {
    setuser_id(e.target.value);
  };
  const password_Onchang = (e) => {
    setpassword(e.target.value);
  };
  const email_Onchang = (e) => {
    setemail(e.target.value);
  };
  const name_Onchang = (e) => {
    setname(e.target.value);
  };

  const reguster_sumit = (e) => {
    e.preventDefault();
    let register_info = {
      user_id,
      password,
      email,
      name,
    };
    dispatch(register_info);
    //  input reset
    setuser_id("");
    setpassword("");
    setemail("");
    setname("");
  };
  return (
    <div className="regiter">
      <section className="regiter__form">
        <h1>회원가입</h1>
        <Postinput
          type={"id"}
          value={user_id}
          onchange={user_Onchang}
          placeholder={"ID"}
        />

        <Postinput
          type={"password"}
          value={password}
          onchange={password_Onchang}
          placeholder={"password"}
        />

        <Postinput
          type={"name"}
          value={email}
          onchange={email_Onchang}
          placeholder={"email"}
        />

        <Postinput
          type={"email"}
          value={name}
          onchange={name_Onchang}
          placeholder={"name"}
        />
        <Button children={"회원가입"} handleClick={reguster_sumit} />
      </section>
    </div>
  );
};

export default Register;
