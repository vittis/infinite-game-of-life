import { Room, Client } from 'colyseus';
import { Board, convertTo2dArray, convertTo1dArray } from './life.schema';
import { nextGeneration } from './life.engine';
import Generation from '../db/generation';

const saveGeneration = async (generation, board) => {
  const Gen = new Generation({ generation, board });
  await Gen.save();
};

const MAX_TIMER = 10;
let TIMER = MAX_TIMER;

export class LifeRoom extends Room<Board> {
  autoDispose = false;

  onCreate(options) {
    if (options.generation && options.board) {
      const next = nextGeneration(convertTo2dArray(options.board));
      const newBoard = new Board();
      newBoard.board = convertTo1dArray(next);
      newBoard.generation = options.generation + 1;
      this.setState(newBoard);
    } else {
      this.setState(new Board());
      this.state.initialize();
    }

    this.onMessage('click', (client, msg) => {
      const currentBoard = convertTo2dArray(this.state.board);
      const { i, k } = msg;
      currentBoard[i][k] = currentBoard[i][k] === 0 ? 1 : 0;

      const newBoard = new Board();
      newBoard.board = convertTo1dArray(currentBoard);
      newBoard.generation = this.state.generation;
      newBoard.timer = this.state.timer;
      this.setState(newBoard);
    });

    this.clock.setInterval(async () => {
      await saveGeneration(this.state.generation, this.state.board);
      const next = nextGeneration(convertTo2dArray(this.state.board));
      const newBoard = new Board();
      newBoard.board = convertTo1dArray(next);
      newBoard.generation = this.state.generation + 1;
      newBoard.timer = MAX_TIMER;
      TIMER = MAX_TIMER;
      this.setState(newBoard);
    }, 10000);

    this.clock.setInterval(() => {
      TIMER -= 1;
      this.broadcast('tick', TIMER);
    }, 1000);
  }

  async onJoin(client: Client, options: any) {
    const allGens = await Generation.find();
    client.send('receive_all', allGens);
  }

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
