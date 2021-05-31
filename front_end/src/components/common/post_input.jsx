import React from "react";
import "../../scss/common/input.scss";

const Postinput = ({ title, onchange, placeholder, value, type }) => {
  return (
    <>
      <form className="post">
        <h2 className="post__title">{title}</h2>
        <label htmlFor="post" className="hidden">
          post
        </label>
        <input
          className="post__input"
          type={type}
          onChange={onchange}
          placeholder={placeholder}
          value={value}
        />
      </form>
    </>
  );
};

export default Postinput;
