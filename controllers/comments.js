const Recipe = require('../models/recipe');

const create = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  recipe.comments.push(req.body);
  try{
    await recipe.save();
  } catch (err) {
    res.redirect('/recipes/${recipe._id}')
  }
}

const deleteComment = (req, res, next) => {
  Recipe.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(recipe) {
    if (!recipe) return res.redirect('/recipes');
    recipe.comments.remove(req.params.id);
    recipe.save().then(function() {
      res.redirect(`/recipes/${recipe._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

module.exports = {
  create,
  delete: deleteComment
}