import React from "react";
import Block from "./Block";

const getXAxis = (i, j) => (j % 3) + i * 3;
const getYAxis = (i, j) => {
  return i % 3;
};

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 9; i += 1) {
    grid.push([]);

    for (let j = 0; j < 9; j += 1) {
      grid[i].push({
        x: getXAxis(i, j),
        y: getYAxis(i, j),
        value: 0
      });
    }
  }

  return grid;
};

const initialGrid = generateGrid();

const Grid = () => {
  return (
    <div className="Grid">
      {initialGrid.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
};

export default Grid;
