import React from "react";

const Thread = ({ subject, description }) => {
  return (
    <div>
      <h3>{subject}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Thread;
