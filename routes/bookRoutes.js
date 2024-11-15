const {Router} = require("express")
const { getBooks, addBook, updateBook, deleteBook, getOneBook, search } = require("../controller/bookController")
const { getAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor } = require("../controller/author.controller")

const bookRouter = Router()

bookRouter.get("/getBooks" , getBooks)
bookRouter.get("/getOneBook/:id" , getOneBook)
bookRouter.post("/addBook" , addBook)
bookRouter.put("/updateBook/:id" , updateBook)
bookRouter.delete("/deleteBook/:id" , deleteBook)
bookRouter.get("/search" ,search)

bookRouter.get("/getAuthors" , getAuthors)
bookRouter.get("/getOneAuthor/:id" , getOneAuthor)
bookRouter.post("/addAuthor" , addAuthor)
bookRouter.put("/updateAuthor/:id" , updateAuthor)
bookRouter.delete("/deleteAuthor/:id" , deleteAuthor)
bookRouter.get("/search" ,search)

module.exports  = bookRouter