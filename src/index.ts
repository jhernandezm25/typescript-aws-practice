import express, { Express, Request, Response } from 'express';
import user from './functionsExpress/user';
import dotenv from 'dotenv';
const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/user', user.save);
app.get('/user/:email', user.findOne);
app.patch('/user/:email', user.updateUser);
app.delete('/user/:email', user.deleteUser)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});