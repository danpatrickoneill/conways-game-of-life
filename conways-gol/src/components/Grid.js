import React, { useState } from 'react';
import Cell from './Cell';
import { generateLife } from '../utils/generateLife';
import { buildLifeMap } from '../utils/buildLifeMap';
import { liveOn } from '../utils/liveOn';

// triggerEvolution() {
//   console.log('Evolving!');
//   this.bufferSwitch = this.bufferSwitch ? false : true;
//   // console.log(this.state.grid);
//   // console.log(this.state.gridTwo);
//   // if (this.bufferSwitch) {
//   //   this.setState({ grid: liveOn(this.state.gridTwo) });
//   // } else {
//   //   this.setState({ gridTwo: liveOn(this.state.grid) });
//   // }
//   let temp = liveOn(this.lifeMap);
//   this.setState({ grid: temp });
//   this.lifeMap = temp;
// }
// Could set a bool inside the class to determine which grid gets shown; flag one as active
const Grid = () => {
  // constructor() {
  //   super();
  //   // this.grid = [];
  //   // this.bufferGrid = [];
  //   this.dimension = 10;
  //   this.lifeMap = generateLife(this.dimension);
  //   this.state = {
  //     grid: buildLifeMap(this.dimension, this.lifeMap),
  //     gridTwo: liveOn(this.lifeMap),
  //   };
  //   this.bufferSwitch = true;
  // }
  const [grid, setGrid] = useState([]);
  const [nextGrid, setNextGrid] = useState([]);
  const [lifeMap, setLifeMap] = useState(null);

  function advanceTime() {
    setGrid(liveOn(grid));
  }

  function buffer() {
    setNextGrid(liveOn(grid));
  }

  async function initialize() {
    setLifeMap(generateLife(100));
    setTimeout(() => {
      setGrid(buildLifeMap(lifeMap));
    }, 8000);
  }

  return (
    <div>
      <div>
        <button onClick={() => advanceTime()}>Live and Let Die</button>
        <button onClick={() => buffer()}>Buffer</button>
        <button onClick={() => setGrid(buildLifeMap(lifeMap))}>
          Random Initialize
        </button>
        <button onClick={() => setLifeMap(generateLife(100))}>
          Generate Lifemap
        </button>
      </div>
      {grid.map((row) => {
        return (
          <div style={{ height: '10px' }}>
            {row.map((life) => {
              return <Cell alive={life} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
