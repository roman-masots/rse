import { getAllIngredients } from '../controller/ingredient-controller';

export const handleIngredients = db => async (req, res) => {
  const ingredients = await getAllIngredients(db);
  ingredients.length
    ? res.json(ingredients)
    : res.status(400).json('Ingredients not found');
};
