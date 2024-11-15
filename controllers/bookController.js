const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

exports.createBook = async (req, res, next) => {
    try {
        const { title, author, rating, commentsCount } = req.body;

        const book = await Book.create({ title, author, rating, commentsCount });
        await Author.findByIdAndUpdate(author, { $inc: { booksCount: 1 } });

        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};

exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find().populate('author');
        res.json(books);
    } catch (error) {
        next(error);
    }
};
