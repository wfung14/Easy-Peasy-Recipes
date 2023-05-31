const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

const newIngredient = async (req, res) => {
  console.log('creating new ingredient')
  const ingredients = await Ingredient.find({}).sort('name');
  res.render('ingredients/new', { title: 'Add Ingredient', ingredients });
}

const create = async (req, res) => {
  console.log("create ingredient")
  try {
    await Ingredient.create(req.body);
  } catch (err) {
  }
  res.redirect('/ingredients/new');
}

module.exports = {
  new: newIngredient,
  create
};