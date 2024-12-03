const Book = require("../models/book");
const bookService = require("../services/bookService");

const getAllBooks = (req, res) => {
    res.json(bookService.getAllBooks());
};

const getBookById = (req, res) => {
    const book = bookService.getBookById(req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

const createBook = (req, res) => {
    const { id, name, author, price } = req.body;
    if (!id || !name || !author || !price) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newBook = new Book(id, name, author, price);
    res.status(201).json(bookService.createBook(newBook));
};

const updateBook = (req, res) => {
    const updatedBook = bookService.updateBook(req.params.id, req.body);
    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

const deleteBook = (req, res) => {
    const deletedBook = bookService.deleteBook(req.params.id);
    if (deletedBook) {
        res.json(deletedBook);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
