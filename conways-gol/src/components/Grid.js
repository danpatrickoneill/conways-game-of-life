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
  const [generation, setGeneration] = useState(1);

  function advanceTime() {
    setSwapped(!swapped);
    if (swapped) {
      setGrid(liveOn(nextGrid));
    } else {
      setNextGrid(liveOn(grid));
    }
    setGeneration(generation + 1);
  }

  function buffer() {
    setNextGrid(liveOn(grid));
  }

  // async function initialize() {
  //   setLifeMap(generateLife(50));
  //   setTimeout(() => {
  //     setGrid(buildLifeMap(lifeMap));
  //   }, 8000);
  // }

  let key = 0;
  return (
    <div>
      <div>
        <button onClick={() => advanceTime()}>Live and Let Die</button>
        <button onClick={() => buffer()}>Buffer</button>
        <button onClick={() => setGrid(buildLifeMap(lifeMap))}>
          Random Initialize
        </button>
        <button onClick={() => setLifeMap(generateLife(60))}>
          Generate Lifemap
        </button>
        <div>
          <p style={{ margin: '1px' }}>Current Generation: {generation}</p>
        </div>
      </div>
      {
        <>
          <div style={{ display: swapped ? 'block' : 'none' }}>
            {grid.map((row) => {
              return (
                <div style={{ height: '5px' }}>
                  {row.map((life) => {
                    key++;
                    return <Cell key={key} alive={life} />;
                  })}
                </div>
              );
            })}
          </div>
          <div style={{ display: swapped ? 'none' : 'block' }}>
            {nextGrid.map((row) => {
              return (
                <div style={{ height: '5px' }}>
                  {row.map((life) => {
                    key++;
                    return <Cell key={key} alive={life} />;
                  })}
                </div>
              );
            })}
          </div>
        </>
      }
    </div>
  );
};

export default Grid;
