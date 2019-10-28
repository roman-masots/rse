require('dotenv').config();
import express from 'express';
import { json } from 'body-parser';

const app = express();
const jsonParser = json();

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening to port ${process.env.SERVER_PORT} `),
);
