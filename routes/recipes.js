const express = require('express');
const router = express.Router();

// create controller module
const recipesCtrl = require('../controllers/recipes')

// GET /recipes/new
router.get('/new', recipesCtrl.new);

// POST /recipes
router.post('/', recipesCtrl.create);

// GET route for /recipes
router.get('/', recipesCtrl.index);

module.exports = router;