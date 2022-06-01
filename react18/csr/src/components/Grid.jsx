import React from "react";

const Grid = ({ children }) => {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
    >
      {children}
    </div>
  );
};

export default Grid;
