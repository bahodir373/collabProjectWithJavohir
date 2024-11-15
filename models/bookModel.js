const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    rating: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Book', bookSchema);