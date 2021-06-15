import React from "react";
import "../../scss/style.scss";
const Button = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      className="btn" //
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
