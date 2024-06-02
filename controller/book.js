var bookList = [
    {
        id:"1717215862912",
        title:"Harry Potter",
        author:"JK Rowling",
        year:1996
    },
    {
        id:"1717215862004",
        title:"Thinking Fast and Slow",
        author:"Daniel Kahneman",
        year:2006
    }
]

// code to get all the books.
const getAllBooks = async (req,res) => {
    return res.status(200).json({
        "book":bookList
    })

}

// code to get book by ID.
const getBookByID = (req,res,next,id) => {
    const book = bookList.filter((book) => {
        return id==book.id
    })
    req.book = book;
    next()
}

// code for getting a book
const getABook = async (req,res) => {
    if(req.book.length == 0){
        return res.status(404).json({
            "message":"Book not found",
        })
    }
    console.log(req.book)
    return res.status(200).json({
        "message":"Book Found!",
        "book":req.book
    })
}

// code for updating the existing book
const updateABook = (req,res) => {

    if(req.book.length == 0){
        return res.status(404).json({
            "message":"Book not found",
        })
    }

    const updatedBook = {...req.book[0],...req.body}

    if (!validateBook(req, res, updatedBook)) return; 

    const bookIdx = bookList.findIndex((book) => {
        return book.id == updatedBook.id
    })
    
    bookList[bookIdx] = updatedBook
    
    return res.status(200).json({
        "message":"Book has been successfully updated"
    })
}

// code for deleting a existing book
const deleteABook = async (req,res) => {

    if (req.book.length == 0) {
        return res.status(404).json({
            "message": "Book not found",
        });
    }

    bookList = bookList.filter((book) => {
        return book.id != req.book[0]?.id
    })

    return res.status(200).json({
        "message":"Book deleted successfullly!",
        "book": bookList
    })
}

// code for creating a new book
const createABook = (req,res) => {

    const book = {...req.body,id:new Date().getTime().toString()}

    if (!validateBook(req, res, book)) return; 

    if(!res.headersSent){
        bookList.push(book)

        return res.status(201).json({
            "message":"Book created successfully!",
            "book":book
        })
}
}


// code for validation
const validateBook = (req,res,book) => {
    const keys = Object.keys(book)

    if(!keys.includes("author") || !keys.includes("title") || !keys.includes("year")){
        res.status(400).json({
            "message":"Enter all the required fields",
            "book":null
        })
        return false;
    }

    if(book["title"] == "" || book["author"]=="" || book["year"] == ""){
        res.status(400).json({
            "message":"Enter all the required values",
            "book":null
        })
        return false;
    }

    if(!isNumber(book["year"])){
        
        res.status(400).json({
            "message":"Enter number in the year",
            "book":null
        })
        return false
    }

    book["year"] = parseInt(book["year"])

    console.log("year ==>" +book["year"])
    if(isNaN(book["year"]) || book["year"] <= 0){
        res.status(400).json({
            "message":"Enter valid number in the year",
            "book":null
        })
        return false
    }

    return true
}

// regex code to check for number.
const isNumber = (str) => {
    return /^-?\d+(\.\d+)?$/.test(str)
}

module.exports = {getAllBooks,getABook,updateABook,deleteABook,createABook,getBookByID}