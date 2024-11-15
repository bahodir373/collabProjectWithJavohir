const { model, Schema } = require("mongoose");

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please put the name"],
    minlength: [2, "Name kamida 2 harf bolishi kerak"],
    maxlength: [200, "Name 200 harfdan oshmasligi kerak"],
    trim: true,
    match: [/^[A-Za-z\s\-']+$/, "Only letters, spaces, dashes, and apostrophes are allowed."]
  },
  surname: {
    type: String,
    required: [true, "Please put the surname"],
    minlength: [2, "Surname kamida 2 harf bolishi kerak"],
    maxlength: [200, "Surname 200 harfdan oshmasligi kerak"],
    trim: true,
    match: [/^[A-Za-z\s\-']+$/, "Only letters, spaces, dashes, and apostrophes are allowed."]
  },
  birthYear: {
    type: Number,
    required: [true, "Please put the birthYear"],
    max: [new Date().getFullYear(), "BirthYear hozirgi yildan katta bo'lmasin"],
    min: [1000, "BirthYear juda kichik"],
    trim: true
  },
  diedYear: {
    type: Number,
    required: [true, "Please put the diedYear"],
    max: [new Date().getFullYear(), "DiedYear hozirgi yildan katta bo'lmasin"],
    trim: true,
  }
});

module.exports = model("author", authorSchema);
