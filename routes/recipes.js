const express = require('express');
const router = express.Router();
// create controller module
const recipesCtrl = require('../controllers/recipes')
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET route for /recipes
router.get('/', recipesCtrl.index);

// GET /recipes/new
router.get('/new', ensureLoggedIn, recipesCtrl.new);

// GET /recipes/:id (show functionality) MUST be below new route
router.get('/:id', recipesCtrl.show);

// POST /recipes
router.post('/', ensureLoggedIn, recipesCtrl.create);

module.exports = router;