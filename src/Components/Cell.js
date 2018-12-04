import React from "react";

const Cell = ({ cell }) => {
  return (
    <div className="Cell">
      {cell.x}, {cell.y}
    </div>
  );
};

export default Cell;
