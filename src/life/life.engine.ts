import produce from 'immer';

export const numRows = 5;
export const numCols = 5;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const countNeighbors = (grid: any, x: number, y: number) => {
  return operations.reduce((acc, [i, j]) => {
    const row = (x + i + numRows) % numRows;
    const col = (y + j + numCols) % numCols;
    acc += grid[row][col];
    return acc;
  }, 0);
};

export const nextGeneration = (g) => {
  return produce(g, (gridCopy) => {
    for (let i = 0; i < numRows; i++) {
      for (let k = 0; k < numCols; k++) {
        const neighbors = countNeighbors(g, i, k);

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][k] = 0;
        } else if (g[i][k] === 0 && neighbors === 3) {
          gridCopy[i][k] = 1;
        }
      }
    }
  });
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const play = async (board) => {
  const next = nextGeneration(board);
  await sleep(100);
  play(next);
};

export { play, generateEmptyGrid };
