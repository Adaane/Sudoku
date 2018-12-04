import React from "react";
import Block from "./Block";

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 3; i += 1) {
    grid.push([]);

    for (let j = 0; j < 9; j += 1) {
      grid[i].push({
        x: 0,
        y: 0,
        value: 0
      });
    }
  }

  return grid;
};

const initialGrid = generateGrid();
console.log(initialGrid);
const Grid = () => {
  return initialGrid.map((block, index) => <Block key={index} block={block} />);
};

export default Grid;
