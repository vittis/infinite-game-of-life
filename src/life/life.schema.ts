import { Schema, type, ArraySchema } from '@colyseus/schema';
import { numCols, numRows, generateEmptyGrid } from './life.engine';

export class Board extends Schema {
  @type(['number'])
  board: ArraySchema<number>;

  initialize() {
    this.board = new ArraySchema<number>(numRows * numCols);
    const grid = generateEmptyGrid();

    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      for (let j = 0; j < row.length; j++) {
        this.board[j + i * grid.length] = row[j];
      }
    }
  }
}
