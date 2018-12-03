import React from "react";

const Cell = ({ cell }) => {
  return <div className="Cell">{cell.value}</div>;
};

export default Cell;
