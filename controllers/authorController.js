const Author = require('../models/authorModel');

exports.createAuthor = async (req, res, next) => {
    try {
        const { name, birthDeath } = req.body;
        const author = await Author.create({ name, birthDeath });
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
};

exports.getAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        next(error);
    }
};
