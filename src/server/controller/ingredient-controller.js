import IngredientModel from '../models/ingredient-model';

// Get all ingredients as objects and save to array
export const getAllIngredients = db => {
  return db
    .select('*')
    .from('ingredient')
    .then(data => data.map(obj => new IngredientModel(obj.id, obj.name)))
    .catch(error => console.log('Error getting all ingredients:', error));
};

// Get ingredients by keyword(s) and save their id to array.
export const getIngredientIdsByKeyword = async (keywords, db) => {
  const allIngredients = await getAllIngredients(db);
  const ingredientsById = new Array();

  for (let i = 0; i < allIngredients.length; i++) {
    for (let j = 0; j < keywords.length; j++) {
      if (
        allIngredients[i].name.toUpperCase().includes(keywords[j].toUpperCase())
      ) {
        ingredientsById.push(allIngredients[i].id);
      }
    }
  }
  return ingredientsById;
};
