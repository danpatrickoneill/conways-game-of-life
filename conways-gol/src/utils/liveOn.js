// Just need another function to generate new life grid based on known rules
export const liveOn = (grid) => {
  const lifeMap = grid.slice();
  function checkNeighbors(x, y) {
    const edge = grid.length - 1;
    const neighbors = [];
    if (x === 0 || y === 0) {
      lifeMap[x][y] = false;
    } else if (x === edge || y === edge) {
      lifeMap[x][y] = false;
    } else {
      neighbors.push(grid[x - 1][y - 1]);
      neighbors.push(grid[x][y - 1]);
      neighbors.push(grid[x + 1][y - 1]);
      neighbors.push(grid[x - 1][y]);
      neighbors.push(grid[x + 1][y - 1]);
      neighbors.push(grid[x - 1][y + 1]);
      neighbors.push(grid[x][y + 1]);
      neighbors.push(grid[x + 1][y + 1]);
    }
    // const liveNeighbors = neighbors.reduce((acc, neighbor) => {
    //   if (neighbor) {
    //     return acc++;
    //   }
    // });
    let liveNeighbors = 0;
    for (let neighbor of neighbors) {
      if (neighbor) {
        liveNeighbors++;
      }
    }
    if (liveNeighbors === 3) {
      lifeMap[x][y] = true;
    } else if (liveNeighbors === 2 && grid[x][y] === true) {
      lifeMap[x][y] = true;
    } else {
      lifeMap[x][y] = false;
    }
  }
  // Use of for/in is intentional; trying to find indices
  for (let row in grid) {
    for (let elem in row) {
      checkNeighbors(row, elem);
    }
  }
  return lifeMap;
};
