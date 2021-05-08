import React from "react";

const Checkbox = ({ type, onChange }) => {
  return (
    <>
      <label htmlFor="box">
        {type}
        <input type="radio" name="box" id="box" onChange={onChange} />
      </label>
    </>
  );
};

export default Checkbox;
