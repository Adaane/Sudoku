import React from "react";

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
