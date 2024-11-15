

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please put the name"],
    minlength: [2, "Name kamida 2 harf bolishi kerak"],
    maxlength: [200, "Name 200 harfdan oshmasligi kerak"],
    trim: true,
    match: [/^[A-Za-z\s\-']+$/, "Only letters, spaces, dashes, and apostrophes are allowed."]
  },
  birthDeath: {
    type: Number,
        required: [true, "Please put the birthDeath"],
        max: [new Date().getFullYear(), "DiedYear hozirgi yildan katta bo'lmasin"],
        trim: true,
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
