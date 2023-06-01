const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

const index = async (req,res) => {
  const recipes = await Recipe.find({});
  res.render('recipes/index', {
    title: 'All Recipes', recipes
  })
}

const show = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id).populate('ingredients');
  // console.log(recipe)
  const ingredients = await Ingredient.find({ _id: { $nin: recipe.ingredients } }).sort('name');
  // console.log(ingredients)
  res.render('recipes/show', { title: 'Recipe Detail', recipe, ingredients });
}

const newRecipe = (req, res) => {
  res.render('recipes/new', { title: 'Add Recipe', errorMsg: ''});
}

const create = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.redirect(`/recipes/${recipe._id}`);
  } catch (err) {
    res.render('recipes/new', { errorMsg: err.message });
  }
}

module.exports = {
  index,
  show,
  new: newRecipe,
  create
};