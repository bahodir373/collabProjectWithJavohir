// const { model, Schema } = require("mongoose");

// const bookSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, "Please put the title"],
//     minlength: [2, "Title kamida 2 harf bolishi kerak"],
//     maxlength: [200, "Title 200 harfdan oshmasligi kerak"],
//     trim: true,
//     match: [/^[A-Za-z0-9\s\-']+$/, "You cannot write other labels apart from numbers, words, spaces, dashes, and apostrophes."]
//   },
//   author: {
//     type: String,
//     required: [true, "Please put the author"],
//     minlength: [2, "Author kamida 2 harf bolishi kerak"],
//     maxlength: [50, "Author 50 harfdan oshmasligi kerak"],
//     trim: true,
//     uppercase: true
//   },
//   genre: {
//     type: String,
//     required: [true, "Please put the genre"],
//     minlength: [2, "Genre kamida 2 harf bolishi kerak"],
//     maxlength: [200, "Genre 200 harfdan oshmasligi kerak"],
//     trim: true,
//     enum: {
//       values: [
//         'fiction', 'non-fiction', 'fantasy', 'comedy', 'mystery', 'romance', 
//         'science fiction', 'biography', 'horror', 'thriller', 'historical', 
//         'adventure', 'young adult', 'children', 'self-help', 'health', 'guide', 
//         'memoir', 'travel'
//       ],
//       message: "{VALUE} - bunday janr mavjud emas"
//     }
//   },
//   page: {
//     type: Number,
//     required: [true, "Please put the number of pages"],
//     min: [10, "Pages kamida 10 bolishi kerak"],
//     max: [1000, "Pages 1000 pagedan oshmasligi kerak"],
//     trim: true
//   },
//   rate: {
//     type: Number,
//   },
//   publishYear: {
//     type: Number,
//     required: [true, "Please put the publish year"],
//     max: [new Date().getFullYear(), "Publish year hozirgi yildan katta bolmasin"],
//     trim: true
//   },
//   authorId: {
//     type: Schema.Types.ObjectId,
//     ref: 'author', 
//     required: true
//   },
//   period : {
//     type  : String,
//     required  : [true , "Please put the period"],
//     lowercase : true,
//     enum : {
//        values  : ["temuriylar davri" , "jadid davri" , "mustaqillik davri" , "sovet davri"],
//        message : "{VALUE} this period is not defined"
//     }
//   }
// });

// module.exports = model("books", bookSchema); 


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'Author reference is required']
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  commentsCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Book', bookSchema);
