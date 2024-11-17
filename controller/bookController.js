const bookSchema = require("../schema/book.schema")
const authorSchema = require("../schema/author.schema")

const getBooks =  async  (req , res , next) =>  {
  try{
    const books = await bookSchema.find()
    res.json(books) 
  }catch(err){
    next(err)
  }
}



const addBook = async(req , res , next) => {
  try{
    const {title , page , rate , publish , publishYear , authorId ,genre , period } = req.body
    await bookSchema.create({title , page , rate , publish , publishYear, authorId ,genre , period })
    res.json({
      message : "Added your book"
    })
  }catch(err){
    next(err)
  }
}




const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const updateData = req.body

    const updatedBook = await bookSchema.findOneAndUpdate({ _id: id }, updateData)
     res.json({
        message : "Updated"})
  }catch(err){
      next(err)
    }
  }

  
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const deleteData = req.body

    const deleteBook = await bookSchema.findByIdAndDelete({ _id: id }, deleteData)
     res.json({
        message : "deleted"})
  }catch(err){
      next(err)
    }
  }





  ///////////////////////////////////////////// bular author uchun

  const getAuthors =  async  (req , res , next) =>  {
    try{
      const authors = await authorSchema.find()
      res.json(authors) 
    }catch(err){
      next(err)
    }
  }

  
const addAuthor = async(req , res , next) => {
  try{
   const {name  , surname , birthYear , diedYear} = req.body
   await authorSchema.create({name  , surname , birthYear , diedYear})
   res.json({message : "Added"})
  }catch(err){
    next(err)
  }
}

const updateAuthors= async (req, res, next) => {
  try {
    const { id } = req.params; 
    const updateData = req.body

    const updatedAuthors = await authorSchema.findOneAndUpdate({ _id: id }, updateData)
     res.json({
        message : "Updated"})
  }catch(err){
      next(err)
    }
  }

  
const deleteAuthors = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const deleteData = req.body

    const deleteAuthor = await authorSchema.findByIdAndDelete({ _id: id }, deleteData)
     res.json({
        message : "deleted"})
  }catch(err){
      next(err)
    }
  }





/////////////////////////////////////// buni qidirish (search) uchun qildim


const search = async (req , res , next) => {
  const {id} = req.params
  try{
    const searched  = await authorSchema.findById(id)
 
  res.json(searched)
  }catch{
    next("sorry this information not found")
  }
  
}

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  getAuthors,
  addAuthor,
  updateAuthors,
  deleteAuthors,
  search
}