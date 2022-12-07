import React from "react";

const EventInput = (props) => {
  return (
    <input
      name={props.name}
      as={props.as}
      value={props.name}
      style={{ display: "none" }}
      readOnly
    ></input>
  );
};

export default EventInput;
