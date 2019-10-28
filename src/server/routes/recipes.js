import { getRecipes } from '../controller/recipe-controller';

export const handleRecipes = db => async (req, res) => {
  const { keywords } = req.body;
  const recipes = await getRecipes(keywords, db);

  recipes.length
    ? res.json(recipes)
    : res.status(400).json('Recipes not found');
};
