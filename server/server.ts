import dotenv from 'dotenv';
import express, {Express, Request, Response} from "express";
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Language APP!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

