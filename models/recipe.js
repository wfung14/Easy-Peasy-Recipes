const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema ({
  name: {type: String},
  description: {type: String},
  instructions: {type: String},
  ingredients: [ingredientSchema]
})