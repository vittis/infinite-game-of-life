import { Room, Client } from 'colyseus';
import { Board, convertTo2dArray, convertTo1dArray } from './life.schema';
import { nextGeneration, printBoard } from './life.engine';

export class LifeRoom extends Room<Board> {
  onCreate() {
    this.setState(new Board());
    this.state.initialize();

    this.clock.setInterval(() => {
      const next = nextGeneration(convertTo2dArray(this.state.board));
      const newBoard = new Board();
      newBoard.board = convertTo1dArray(next);
      this.setState(newBoard);
    }, 5000);
  }

  onJoin(client: Client, options: any) {}

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
