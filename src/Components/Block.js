import React from "react";
import Cell from "./Cell";

const Block = ({ block }) => {
  return (
    <div className="Block">
      {block.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  );
};

export default Block;
