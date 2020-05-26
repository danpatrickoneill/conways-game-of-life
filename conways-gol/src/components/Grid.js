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
  const [grid, setGrid] = useState([
    [true, true, true],
    [false, false, false],
    [true, true, true],
  ]);
  return (
    <div>
      <div>
        <button>Live and Let Die</button>

        <button>Random Initialize</button>
      </div>
      {grid.map((row) => {
        return (
          <div>
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
