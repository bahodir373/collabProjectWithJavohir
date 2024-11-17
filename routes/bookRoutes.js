const {Router} = require("express")
const { getBooks, addBook, updateBook, deleteBook, search, updateAuthors, deleteAuthors, getAuthors, addAuthor } = require("../controller/bookController")


const bookRouter = Router()

bookRouter.get("/getBooks" , getBooks)
bookRouter.get("/getOneBook/:id")
bookRouter.post("/addBook" , addBook)
bookRouter.put("/updateBook/:id" , updateBook)
bookRouter.delete("/deleteBook/:id" , deleteBook)
bookRouter.get("/search" ,search)

bookRouter.get("/getAuthors" , getAuthors)
bookRouter.get("/getOneAuthor/:id" )
bookRouter.post("/addAuthor" , addAuthor)
bookRouter.put("/updateAuthor/:id" , updateAuthors)
bookRouter.delete("/deleteAuthor/:id" , deleteAuthors)
bookRouter.get("/search" ,search)

module.exports  = bookRouter