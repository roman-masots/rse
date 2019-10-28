import { getIngredientIdsByKeyword } from '../controller/ingredient-controller';
import RecipeModel from '../models/recipe-model';

// Searching for recipes from db using IngredientController array with ingredients ids
export const getRecipes = async (keywords, db) => {
  const ingredienIds = await getIngredientIdsByKeyword(keywords.split(','), db);

  const recipes = await db
    .select('recipe_id', 'name', 'url', 'image')
    .from('recipe')
    .innerJoin('recipeingredient', function() {
      this.on('recipe.id', '=', 'recipeingredient.recipe_id').onIn(
        'ingredient_id',
        ingredienIds,
      );
    })
    .then(data =>
      data.map(
        recipe =>
          new RecipeModel(
            recipe.recipe_id,
            recipe.name,
            recipe.url,
            recipe.image,
          ),
      ),
    )
    .catch(error => console.log('Error getting recipes:', error));

  return recipes;
};
