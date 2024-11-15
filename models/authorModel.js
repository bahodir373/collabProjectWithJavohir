const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Author name is required']
  },
  birthDeath: {
    type: String,
    required: [true, 'Birth-death information is required']
  },
  booksCount: {
    type: Number,
    default: 0
  },
  audiobooksCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Author', authorSchema);
