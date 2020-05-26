export const generateLife = (dimension) => {
  // Generates initial grid for GoL
  const grid = [];
  // Life and death represented here by true and false
  const states = [true, false];
  // Allocates rows in grid
  for (let i = 0; i < dimension; i++) {
    grid.push([]);
  }
  console.log('GRID', grid);
  let j = 0;
  while (j < dimension) {
    for (let i = 0; i < dimension; i++) {
      let randomIndex = Math.floor(Math.random() * 2);
      grid[j].push(states[randomIndex]);
    }
    j++;
  }

  return grid;
};
