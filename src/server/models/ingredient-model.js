export default class IngredientModel {
  constructor(id, name, db) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  // set id(newId) {
  //     this._id = newId;
  // }

  // set name(newName) {
  //     this._name = newName;
  // }
}
