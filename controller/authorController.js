const Author = require('../models/author');
const Book = require('../models/book');

exports.getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate({
      path: 'books',
      select: 'title rating'
    });
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

exports.getAllAuthors = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
};

exports.createAuthor = async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
};

exports.getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  res.json(author);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!author) return res.status(404).json({ error: 'Author not found' });
  res.json({
    message: "updated successfully",
    author
  });
};

exports.deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({
    message: "deleted succesfully",
  });
  res.status(204).end();
};
