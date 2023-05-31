const express = require('express');
const router = express.Router();

// create controller module
const recipesCtrl = require('../controllers/recipes')

// GET /recipes/new
router.get('/new', recipesCtrl.new);

module.exports = router;