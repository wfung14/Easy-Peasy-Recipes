const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema ({
  name: {type: String},
  description: {type: String},
  ingredients: {type: String},
  instructions: {type: String}
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Recipe', recipeSchema);