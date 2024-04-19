import React from "react";

// Button component
export const Button = ({ onClick, value }) => {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};
