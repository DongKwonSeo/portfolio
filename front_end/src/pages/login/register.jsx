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
    <>
      <h1>회원가입</h1>
      <section>
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
          placeholder={"ID"}
        />

        <Postinput
          type={"name"}
          value={email}
          onchange={email_Onchang}
          placeholder={"ID"}
        />

        <Postinput
          type={"email"}
          value={name}
          onchange={name_Onchang}
          placeholder={"ID"}
        />
        <Button children={"LOGIN"} handleClick={reguster_sumit} />
      </section>
    </>
  );
};

export default Register;
