const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  content: {
    type: String
  }
}, {
  timestamps: true
})

const recipeSchema = new mongoose.Schema ({
  name: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }],
  instructions: {
    type: String
  },
  comments: [commentSchema]
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Recipe', recipeSchema);