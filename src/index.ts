import express, { Request, Response } from 'express';
import 'dotenv/config';
import router from './routers';
import { connectMongoose } from './database';

const app = express();
const port = process.env.PORT || 3000;

connectMongoose();

app.get('/', (req: Request, res: Response) => {
  res.send('qrcode-service running');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
