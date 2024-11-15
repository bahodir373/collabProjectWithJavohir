const express = require('express');
const { createAuthor, getAuthors } = require('../controllers/authorController');
const { authenticate, authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', createAuthor);
router.get('/', getAuthors);

router.post('/', authenticate, authorize(['admin']), createAuthor); 
router.get('/', authenticate, getAuthors);
router.put('/:id', authenticate, authorize(['admin']), async (req, res) => {

});

router.delete('/:id', authenticate, authorize(['admin']), async (req, res) => {

});

module.exports = router;
