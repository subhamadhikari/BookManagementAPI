
# Book Management API

This is a simple REST API for managing a list of books. It supports operations to create, read, update, and delete books.


## Table of Contents

- Installation
- Setup
- Running the Server
- API Endpoints
    - Get All Books
    - Get a Book by ID
    - Create a New Book
    - Update an Existing Book
    - Delete a Book
- Testing the API


## Installation

First, make sure you have Node.js installed. Then, clone the repository.

```bash
git clone https://github.com/subhamadhikari/BookManagementAPI.git
cd BookManagementAPI
```
## Setup

Ensure you have the necessary dependencies installed by running:

```bash
npm install
```   

## Running the Server

To start the server, use the following command:

```bash
npm start
```  

## API Endpoints
### Get All Books
- URL: /bookAPI/books
- Method: GET
- Success Response:
    - Code: 200 OK
    - Content: {"book": [{ "id": "1717215862912", "title": "Harry Potter", "author": "JK Rowling", "year": 1996 }, ...]}

### Get a Book by ID
- URL: /bookAPI/books/:bookID

- Method: GET

- URL Params: bookID=[string]

- Success Response:

    - Code: 200 OK
    - Content: {"message": "Book Found!", "book": [{ "id": "1717215862912", "title": "Harry Potter", "author": "JK Rowling", "year": 1996 }]}
- Error Response:

    - Code: 404 Not Found
    - Content: {"message": "Book not found"}

### Create a New Book
- URL: /bookAPI/books

- Method: POST

- Data Params:

    {"title": "string", "author": "string", "year": "number"}
- Success Response:

    - Code: 201 Created
    - Content: {"message": "Book created successfully!", "book": { "id": "1717215862913", "title": "New Book", "author": "Author", "year": 2023 }}

- Error Response:

    - Code: 400 Bad Request
    - Content: {"message": "Enter all the required fields", "book": null}

### Update an Existing Book
- URL: /bookAPI/books/:bookID

- Method: PUT

- URL Params: bookID=[string]

- Data Params:

    {"title": "string", "author": "string", "year": "number"}
- Success Response:

    - Code: 200 OK
    - Content: {"message": "Book has been successfully updated", "book": { "id": "1717215862912", "title": "Updated Title", "author": "Updated Author", "year": 2023 }}
- Error Response:

    - Code: 404 Not Found
    - Content: {"message": "Book not found"}

### Delete a Book
- URL: /bookAPI/books/:bookID

- Method: DELETE

- URL Params: bookID=[string]

- Success Response:

    - Code: 200 OK
    - Content: {"message": "Book deleted successfully!", "book": { "id": "1717215862912", "title": "Deleted Book", "author": "Deleted Author", "year": 2023 }}
- Error Response:

    - Code: 404 Not Found
    - Content: {"message": "Book not found"}

## Testing the API
You can test the API endpoints using a tool like Postman.

### Get All Books
- Method: GET
- URL: http://localhost:5050/bookAPI/books

### Get a Book by ID
- Method: GET
- URL: http://localhost:5050/bookAPI/books/:bookID

### Create a New Book
- Method: POST
- URL: http://localhost:5050/bookAPI/books
- Body:

```bash
{
  "title": "New Book",
  "author": "Author",
  "year": 2023
}
```

### Update a Book
- Method: PUT
- URL: http://localhost:5050/bookAPI/books/:bookID
- Body: 
``` bash
{
  "title": "Updated Title",
  "author": "Updated Author",
  "year": 2023
}
```

### Delete a Book
- Method: DELETE
- URL: http://localhost:5050/bookAPI/books/:bookID



