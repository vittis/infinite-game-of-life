import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server, matchMaker } from 'colyseus';
import { monitor } from '@colyseus/monitor';

import mongoose from 'mongoose';

import { LifeRoom } from './src/life/life.room';
import Generation from './src/db/generation';

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

const connectDb = () => {
  return mongoose.connect(
    'mongodb+srv://vittis:p2sdFLYCp0buQBSB@gameoflife.6hhjn.mongodb.net/generations?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    },
  );
};

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  let lastGen;
  try {
    if (eraseDatabaseOnSync) {
      await Promise.all([Generation.deleteMany({})]);
    }
    lastGen = await Generation.findOne({}).sort('_generation');
    // eslint-disable-next-line no-empty
  } catch (e) {}

  gameServer.define('life_room', LifeRoom);
  matchMaker.createRoom('life_room', {
    generation: lastGen ? lastGen.generation : undefined,
    board: lastGen ? lastGen.board : undefined,
  });

  app.use('/colyseus', monitor());
  gameServer.listen(port);
  console.log(`Listening on ws:__localhost:${port}`);
});
