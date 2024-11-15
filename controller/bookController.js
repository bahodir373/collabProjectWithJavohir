const Book = require('../schema/book.schema');

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().populate('author', 'name birthDeath');
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate('author');
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
