const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
  nameAndMeasurement: {
    type: String
  }
})

module.exports = mongoose.model('Ingredient', ingredientSchema);