const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  content: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
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

module.exports = mongoose.model('Recipe', recipeSchema);