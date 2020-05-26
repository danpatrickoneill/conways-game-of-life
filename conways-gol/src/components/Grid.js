import React from 'react';
import Cell from './Cell';
import { generateLife } from '../utils/generateLife';
import { buildLifeMap } from '../utils/buildLifeMap';
import { liveOn } from '../utils/liveOn';

// Could set a bool inside the class to determine which grid gets shown; flag one as active
class Grid extends React.Component {
  constructor() {
    super();
    // this.grid = [];
    // this.bufferGrid = [];
    this.dimension = 10;
    this.lifeMap = generateLife(this.dimension);
    this.state = {
      grid: buildLifeMap(this.dimension, this.lifeMap),
      gridTwo: liveOn(this.lifeMap),
    };
    this.bufferSwitch = true;
  }

  triggerEvolution() {
    console.log('Evolving!');
    this.bufferSwitch = this.bufferSwitch ? false : true;
    // console.log(this.state.grid);
    // console.log(this.state.gridTwo);
    // if (this.bufferSwitch) {
    //   this.setState({ grid: liveOn(this.state.gridTwo) });
    // } else {
    //   this.setState({ gridTwo: liveOn(this.state.grid) });
    // }
    let temp = liveOn(this.lifeMap);
    this.setState({ grid: temp });
    this.lifeMap = temp;
  }
  render() {
    // console.log(this.lifeMap);
    return (
      <div>
        <div>
          <button onClick={() => this.triggerEvolution()}>
            Live and Let Die
          </button>

          <button
            onClick={() =>
              this.setState({
                grid: buildLifeMap(this.dimension, this.lifeMap),
              })
            }
          >
            Random Initialize
          </button>
        </div>
        {this.state.grid.map((row) => {
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
  }
}

export default Grid;
