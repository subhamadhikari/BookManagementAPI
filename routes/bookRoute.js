const express = require("express")
const router = express.Router()

const {getABook,getAllBooks,
    createABook,updateABook,
    deleteABook,getBookByID} = require("./../controller/book.js")

// PARAMS
router.param("bookID",getBookByID)

// Routes
router.get("/books",getAllBooks)
router.get("/books/:bookID",getABook)
router.post("/books",createABook)
router.put("/books/:bookID",updateABook)
router.delete("/books/:bookID",deleteABook)

module.exports = router