const Recipe = require('../models/recipe');

const newRecipe = (req, res) => {
  res.render('recipes/new', { errorMsg: ''});
}

module.exports = {
  new: newRecipe,
};