import React from 'react';
import Cell from '../components/Cell';

export const buildLifeMap = (lifeMap) => {
  const dimension = lifeMap.length;
  const grid = [];
  // Allocates rows in grid
  for (let i = 0; i < dimension; i++) {
    grid.push([]);
  }
  // console.log('GRID', grid);
  let j = 0;
  while (j < dimension) {
    for (let i = 0; i < dimension; i++) {
      grid[j].push(lifeMap[i][j]);
    }
    j++;
  }
  // for (let i = 0; i < dimension; i++) {
  //   grid.push(row);
  // }
  // console.log(grid);
  return grid;
};
