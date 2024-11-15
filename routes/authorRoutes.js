const express = require('express');
const authorController = require('../controller/authorController');

const router = express.Router();

router.get('/', authorController.getAuthors);
router.post('/', authorController.createAuthor);
router.get('/:id', authorController.getAuthorById);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;