import { Room, Client } from 'colyseus';

export class LifeRoom extends Room {
  onCreate(options: any) {
    console.log('created');

    this.onMessage('type', (client, message) => {
      // handle "type" message
    });
  }

  onJoin(client: Client, options: any) {}

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
