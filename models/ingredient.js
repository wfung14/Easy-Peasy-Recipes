const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
  name: {
    type: String
  },
  measurements: {
    type: String
  }
})

module.exports = mongoose.model('Ingredient', ingredientSchema);