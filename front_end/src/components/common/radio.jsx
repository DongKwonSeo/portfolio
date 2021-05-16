import React from "react";
import "../../scss/common/check_box.scss";

const Radio = ({ type, onchange, name }) => {
  return (
    <>
      <label htmlFor={type} className="radio">
        <input
          id={type}
          className="a11y radio__input"
          type="radio" //
          value={type}
          name={name}
          onChange={onchange}
          // checked={check}
        />
        <span className="radio__value">{type}</span>
      </label>
    </>
  );
};

export default Radio;
