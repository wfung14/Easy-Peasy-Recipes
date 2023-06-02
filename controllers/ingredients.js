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
  res.redirect('/ingredients/new');
}

const addToList = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  recipe.ingredients.push(req.body.ingredientId);
  await recipe.save();
  res.redirect(`/recipes/${recipe._id}`)
}

module.exports = {
  new: newIngredient,
  create,
  addToList
};