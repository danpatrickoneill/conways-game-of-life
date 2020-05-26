import React, { useState } from 'react';
import Cell from './Cell';
import { generateLife } from '../utils/generateLife';
import { buildLifeMap } from '../utils/buildLifeMap';
import { liveOn } from '../utils/liveOn';

const Grid = () => {
  const [grid, setGrid] = useState([]);
  const [nextGrid, setNextGrid] = useState([]);
  const [lifeMap, setLifeMap] = useState(null);
  const [swapped, setSwapped] = useState(false);

  function simulate() {}

  function advanceTime() {
    setSwapped(!swapped);
    if (swapped) {
      setGrid(liveOn(nextGrid));
    } else {
      setNextGrid(liveOn(grid));
    }
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

  let key = 0;
  return (
    <div>
      <div>
        <button onClick={() => simulate()}>Run Simulation</button>
        <button onClick={() => advanceTime()}>Live and Let Die</button>
        <button onClick={() => buffer()}>Buffer</button>
        <button onClick={() => setGrid(buildLifeMap(lifeMap))}>
          Random Initialize
        </button>
        <button onClick={() => setLifeMap(generateLife(100))}>
          Generate Lifemap
        </button>
      </div>
      {swapped
        ? nextGrid.map((row) => {
            return (
              <div style={{ height: '10px' }}>
                {row.map((life) => {
                  key++;
                  return <Cell key={key} alive={life} />;
                })}
              </div>
            );
          })
        : grid.map((row) => {
            return (
              <div style={{ height: '10px' }}>
                {row.map((life) => {
                  key++;
                  return <Cell key={key} alive={life} />;
                })}
              </div>
            );
          })}
    </div>
  );
};

export default Grid;
