export default class Recipe {
  constructor(id, name, recipeUrl, recipeImage) {
    this._id = id;
    this._name = name;
    this._recipeUrl = recipeUrl;
    this._recipeImage = recipeImage;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get recipeUrl() {
    return this._recipeUrl;
  }

  get recipeImage() {
    return this._recipeImage;
  }

  // set id(newId) {
  //     this._id = newId;
  // }

  // set name(newName) {
  //     this._name = newName;
  // }

  // set recipeUrl(newRecipeUrl) {
  //     this._recipeUrl = newRecipeUrl;
  // }

  // set recipeImage(newRecipeImage) {
  //     this._recipeImage = newRecipeImage;
  // }
}
