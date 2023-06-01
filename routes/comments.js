const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// All routes start with '/' (root)

// POST /comments/:id/comments
router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);
// DELETE /comments
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;