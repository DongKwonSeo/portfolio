import React from "react";
import "../../scss/style.scss";

const Radio = ({ type, onChange, name, value, id }) => {
  return (
    <>
      <label className="radio">
        <input
          id={id}
          className="a11y radio__input"
          type="radio" //
          value={type}
          name={name}
          onChange={onChange}
        />
        <span className="radio__value">{type}</span>
      </label>
    </>
  );
};

export default Radio;

{
  /* <Radio
id="box1"
type={"아침"}
value={mealType}
name={"mealTime"}
onchange={radioChange_1}
/> */
}

// import React from "react";
// import "../../scss/style.scss";

// const Radio = ({ type, onchange, name }) => {
//   return (
//     <>
//       <label htmlFor={type} className="radio">
//         <input
//           id={type}
//           className="a11y radio__input"
//           type="radio" //
//           value={type}
//           name={name}
//           onChange={onchange}
//           // checked={check}
//         />
//         <span className="radio__value">{type}</span>
//       </label>
//     </>
//   );
// };

// export default Radio;
