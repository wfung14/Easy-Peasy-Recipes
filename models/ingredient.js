const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
  nameAndMeasurment: {
    type: String
  }
})

module.exports = mongoose.model('Ingredient', ingredientSchema);