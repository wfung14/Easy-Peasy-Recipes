const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// All routes start with '/' (root)

// POST /comments/:id/comments
router.post('/recipes/:id/comments', commentsCtrl.create);

module.exports = router;