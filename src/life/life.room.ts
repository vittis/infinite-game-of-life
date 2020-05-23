import { Room, Client } from 'colyseus';
import { Board } from './life.schema';

export class LifeRoom extends Room<Board> {
  onCreate() {
    console.log('created');
    this.setState(new Board());
    this.state.initialize();
    console.log(this.state.board);

    this.onMessage('type', (client, message) => {
      // handle "type" message
    });
  }

  onJoin(client: Client, options: any) {}

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
