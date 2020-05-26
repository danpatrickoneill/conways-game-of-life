import React from 'react';
import Cell from './Cell';

// Could set a bool inside the class to determine which grid gets shown; flag one as active
class Grid extends React.Component {
  constructor() {
    super();
    // this.grid = [];
    // this.bufferGrid = [];
    this.dimension = 5;
    this.mapState = this.generateLife(this.dimension);
    this.state = { grid: this.buildGrid(this.dimension) };
    // this.grid = this.buildGrid(this.dimension);
    this.bufferGrid = this.evolveLife(this.mapState, this.dimension);
  }

  generateLife(dimension) {
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
  }

  buildGrid(dimension) {
    const grid = [];
    // Allocates rows in grid
    for (let i = 0; i < dimension; i++) {
      grid.push([]);
    }
    console.log('GRID', grid);
    let j = 0;
    while (j < dimension) {
      for (let i = 0; i < dimension; i++) {
        grid[j].push(
          <Cell key={i + j * dimension} alive={this.mapState[i][j]} />
        );
      }
      j++;
    }
    // for (let i = 0; i < dimension; i++) {
    //   grid.push(row);
    // }

    return grid;
  }

  // const gridTwo = buildGrid(dimension);
  // Just need another function to generate new life grid based on known rules
  evolveLife(stateMap, dimension) {
    function findNeighbors(row, column) {
      // console.log(`FINDING NEIGBORS OF ${row}, ${column}`);
      const neighbors = [];
      let upperNeighbors;
      let lowerNeighbors;
      let leftNeighbors;
      let rightNeighbors;
      // Set rows for upper and lower neighbors
      if (row === 0) {
        upperNeighbors = row;
      } else {
        upperNeighbors = row - 1;
      }
      if (row === dimension - 1) {
        lowerNeighbors = row;
      } else {
        lowerNeighbors = row + 1;
      }
      // Set columns for left and right neighbors
      if (column === 0) {
        leftNeighbors = column;
      } else {
        leftNeighbors = column - 1;
      }
      if (column === dimension - 1) {
        rightNeighbors = column;
      } else {
        rightNeighbors = column + 1;
      }
      for (let i = leftNeighbors; i < rightNeighbors; i++) {
        for (let j = upperNeighbors; j < lowerNeighbors; j++) {
          if ((i, j) !== (row, column)) {
            console.log(i, j);
            console.log(stateMap[i][j]);
            neighbors.push(stateMap[i][j]);
          }
        }
      }
      // console.log(neighbors);
      // const liveNeighbors = neighbors.reduce((acc, neighbor) => {
      //   if (neighbor) {
      //     acc++;
      //   }
      // });
      console.log(row, column, neighbors);
      let liveNeighbors = 0;
      for (let neighbor of neighbors) {
        if (neighbor === true) {
          liveNeighbors++;
        }
      }
      return liveNeighbors;
    }
    const grid = [];
    // Life and death represented here by true and false
    // Allocates rows in grid
    for (let i = 0; i < dimension; i++) {
      grid.push([]);
    }
    console.log('GRID', grid);
    let j = 0;
    while (j < dimension) {
      for (let i = 0; i < dimension; i++) {
        if (findNeighbors(i, j) === 3) {
          grid[i][j] = true;
        } else if (stateMap[i][j] === true && findNeighbors(i, j) === 2) {
          grid[i][j] = true;
        } else {
          grid[i][j] = false;
        }
      }
      j++;
    }
    console.log(grid);
    return grid;
  }

  triggerEvolution(grid, bufferGrid) {
    console.log('Evolving!');
    // console.log(grid);
    console.log(bufferGrid);
    this.mapState = bufferGrid;
    // this.mapState = [
    //   [true, true, true, true, true],
    //   [true, true, true, true, true],
    //   [true, true, false, true, true],
    //   [true, true, true, true, true],
    //   [true, true, true, true, true],
    // ];
    this.setState({ grid: [this.buildGrid(this.dimension)] });
    this.bufferGrid = this.evolveLife(this.mapState, this.dimension);
    console.log(grid);
    console.log(bufferGrid);
  }
  render() {
    // console.log(mapState);
    return (
      <div>
        <div>
          <button
            onClick={() =>
              this.triggerEvolution(this.state.grid, this.bufferGrid)
            }
          >
            Live On
          </button>
        </div>
        {this.state.grid}
      </div>
    );
  }
}

export default Grid;
