// Just need another function to generate new life grid based on known rules
// function checkNeighbors(grid, lifeMap, x, y) {
//   const edge = grid.length - 1;
//   const neighbors = [];
//   x = Number(x);
//   y = Number(y);
//   console.log(grid);

//   if (x === 0 || y === 0) {
//     lifeMap[x][y] = false;
//   } else if (x === edge || y === edge) {
//     lifeMap[x][y] = false;
//   } else {
//     neighbors.push(grid[x - 1][y - 1]);
//     neighbors.push(grid[x][y - 1]);
//     neighbors.push(grid[x + 1][y - 1]);
//     neighbors.push(grid[x - 1][y]);
//     neighbors.push(grid[x + 1][y - 1]);
//     neighbors.push(grid[x - 1][y + 1]);
//     neighbors.push(grid[x][y + 1]);
//     neighbors.push(grid[x + 1][y + 1]);
//   }
//   // const liveNeighbors = neighbors.reduce((acc, neighbor) => {
//   //   if (neighbor) {
//   //     return acc++;
//   //   }
//   // });
//   let liveNeighbors = 0;
//   for (let neighbor of neighbors) {
//     if (neighbor) {
//       liveNeighbors++;
//     }
//   }
//   // console.log(x, y);
//   // console.log(neighbors, liveNeighbors);
//   // console.log(liveNeighbors);
//   if (liveNeighbors === 3) {
//     lifeMap[x][y] = true;
//   } else if (liveNeighbors === 2 && grid[x][y] === true) {
//     lifeMap[x][y] = true;
//   } else {
//     lifeMap[x][y] = false;
//   }
// }

export const liveOn = (grid) => {
  console.log(grid);
  const lifeMap = JSON.parse(JSON.stringify(grid));
  const edge = grid.length - 1;
  let neighbors = [];
  for (let x = 0; x <= edge; x++) {
    for (let y = 0; y <= edge; y++) {
      if (x === 0 || y === 0) {
        lifeMap[x][y] = false;
      } else if (x === edge || y === edge) {
        lifeMap[x][y] = false;
      } else {
        neighbors.push(grid[x - 1][y - 1]);
        neighbors.push(grid[x][y - 1]);
        neighbors.push(grid[x + 1][y - 1]);
        neighbors.push(grid[x - 1][y]);
        neighbors.push(grid[x + 1][y]);
        neighbors.push(grid[x - 1][y + 1]);
        neighbors.push(grid[x][y + 1]);
        neighbors.push(grid[x + 1][y + 1]);

        let liveNeighbors = 0;
        for (let neighbor of neighbors) {
          if (neighbor) {
            liveNeighbors++;
          }
        }
        neighbors = [];
        // console.log(x, y);
        // console.log(neighbors, liveNeighbors);
        // console.log(liveNeighbors);
        if (liveNeighbors === 3) {
          lifeMap[x][y] = true;
        } else if (liveNeighbors === 2 && grid[x][y] === true) {
          lifeMap[x][y] = true;
        } else {
          lifeMap[x][y] = false;
        }
      }
    }
  }
  console.log(lifeMap);
  return lifeMap;
};
