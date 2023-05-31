const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

// This router is mounted to a "starts with" path of '/'

// GET /ingredients/new (new functionality)
router.get('/ingredients/new', ingredientsCtrl.new);
// POST /ingredients (create functionality)
router.post('/ingredients', ingredientsCtrl.create);



module.exports = router;