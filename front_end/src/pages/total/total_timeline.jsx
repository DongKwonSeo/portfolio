import React from "react";
import "../../scss/style.scss";
const TotalTimeline = ({
  timeLines,
  setModal,
  isopen,
  setisopen,
  setmodalState,
}) => {
  const toggleModal = () => {
    setisopen(!isopen);
    setmodalState({ type: timeLines.type, _id: timeLines._id });
  };

  return (
    <tr onClick={toggleModal}>
      <td>{timeLines.icon}</td>
      <td>{timeLines.display_type}</td>
      <td>{timeLines.desc.map((item) => item)}</td>
      <td>{timeLines.cal}Kal</td>
      <td>{timeLines.create}</td>
    </tr>
  );
};

export default TotalTimeline;
