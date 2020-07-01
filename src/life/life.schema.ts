import { Schema, type, ArraySchema } from '@colyseus/schema';
import { numCols, numRows, generateEmptyGrid } from './life.engine';

export function convertTo1dArray(arr) {
  const newBoard = new ArraySchema<number>(numRows * numCols);
  const grid = [...arr];
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      newBoard[j + i * grid.length] = row[j];
    }
  }

  return newBoard;
}

export function convertTo2dArray(arr: number[]) {
  const copy = [...arr];

  const newArr = [];
  while (copy.length) newArr.push(copy.splice(0, numCols));

  return newArr;
}

export class Board extends Schema {
  @type(['number'])
  board: ArraySchema<number>;

  @type('number')
  generation = 0;

  @type('number')
  timer = 10;

  initialize() {
    const grid = generateEmptyGrid();
    this.board = convertTo1dArray(grid);
  }
}
