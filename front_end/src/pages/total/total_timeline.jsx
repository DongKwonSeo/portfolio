import React from "react";
import "../../scss/totalTimeline.scss";
const TotalTimeline = ({
  timeLines,
  setModal,
  isopen,
  setisopen,
  setmodalState,
}) => {
  const modal = () => {
    setisopen(!isopen);
    setmodalState({ type: timeLines.type, _id: timeLines._id });
  };

  return (
    <tr onClick={modal}>
      <td>{timeLines.icon}</td>
      <td>{timeLines.types}</td>
      <td>{timeLines.desc.map((item) => item)}</td>
      <td>{timeLines.cal}Kal</td>
      <td>{timeLines.create}</td>
    </tr>
  );
};

export default TotalTimeline;
