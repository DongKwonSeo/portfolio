import React from "react";
import "../../scss/style.scss";
const TotalTimeline = ({
  timeLines, //
  isopen,
  Setisopen,
  SetmodalState,
}) => {
  const toggleModal = () => {
    Setisopen(!isopen);
    console.log(timeLines.type);
    SetmodalState({ type: timeLines.type, _id: timeLines._id });
  };

  return (
    <tr onClick={toggleModal}>
      <td>{timeLines.icon}</td>
      <td>{timeLines.display_type}</td>
      <td>{timeLines.desc}</td>
      <td>{timeLines.cal}Kal</td>
      <td>{timeLines.create}</td>
    </tr>
  );
};

export default TotalTimeline;
