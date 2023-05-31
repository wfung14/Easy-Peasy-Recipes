const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

const newIngredient = async (req, res) => {
  const ingredients = await Ingredient.find({}).sort('name');
  res.render('ingredients/new', { title: 'Add Ingredient', ingredients });
}

const create = async (req, res) => {
  try {
    await Ingredient.create(req.body);
  } catch (err) {
  }
  res.redirect('ingredients/new');
}

module.exports = {
  new: newIngredient,
  create
};