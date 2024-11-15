const express = require('express');
const { createBook, getBooks } = require('../controllers/bookController');
const { authenticate, authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.post('/', authenticate, authorize(['admin']), createBook);
router.get('/', authenticate, getBooks);

router.put('/:id', authenticate, authorize(['admin']), async (req, res) => {
});

router.delete('/:id', authenticate, authorize(['admin']), async (req, res) => {
});


module.exports = router;
