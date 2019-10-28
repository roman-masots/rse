require('dotenv').config();
import express from 'express';
import { json } from 'body-parser';
import { handleRecipes } from './routes/recipes';

const app = express();
const jsonParser = json();
const db = require('../../knexfile');

app.get('/recipes', jsonParser, handleRecipes(db));

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening to port ${process.env.SERVER_PORT} `),
);
