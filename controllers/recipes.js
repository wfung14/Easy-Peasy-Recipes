const Recipe = require('../models/recipe');

const index = async (req,res) => {
  res.render('recipes/index', {
    recipes: await Recipe.find()
  })
}

const newRecipe = (req, res) => {
  res.render('recipes/new', { errorMsg: ''});
}

const create = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.redirect('/recipes');
  } catch (err) {
    res.render('recipes/new', { errorMsg: err.message });
  }
}

module.exports = {
  new: newRecipe,
  create,
  index
};