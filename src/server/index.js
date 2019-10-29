require('dotenv').config();
import express from 'express';
import { json } from 'body-parser';
import { handleRecipes } from './routes/recipes';
import { handleIngredients } from './routes/ingredients';

const app = express();
const db = require('../../knexfile');

app.use(json());

app.get('/recipes', handleRecipes(db));
app.get('/ingredients', handleIngredients(db));

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening to port ${process.env.SERVER_PORT} `),
);
