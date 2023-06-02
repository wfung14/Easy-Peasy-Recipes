const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /ingredients/new (new functionality)
router.get('/ingredients/new', ensureLoggedIn, ingredientsCtrl.new);
// POST /ingredients (create functionality)
router.post('/ingredients', ensureLoggedIn, ingredientsCtrl.create);
// POST /recipes/:id/ingredients
router.post('/recipes/:id/ingredients', ensureLoggedIn, ingredientsCtrl.addToList);


module.exports = router;