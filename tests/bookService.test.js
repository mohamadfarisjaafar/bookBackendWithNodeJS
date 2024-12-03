const bookService = require("./bookService");
const Book = require("../models/book");

describe("BookService", () => {
    beforeEach(() => {
        // Clear the books array before each test
        bookService.getAllBooks().length = 0;
    });

    test("createBook adds a new book", () => {
        const book = new Book("1", "Test Book", "Test Author", "20");
        bookService.createBook(book);

        const allBooks = bookService.getAllBooks();
        expect(allBooks).toHaveLength(1);
        expect(allBooks[0]).toMatchObject({
            id: "1",
            name: "Test Book",
            author: "Test Author",
            price: "20",
        });
    });

    test("getBookById retrieves the correct book", () => {
        const book1 = new Book("1", "Book One", "Author One", "10");
        const book2 = new Book("2", "Book Two", "Author Two", "15");
        bookService.createBook(book1);
        bookService.createBook(book2);

        const foundBook = bookService.getBookById("2");
        expect(foundBook).toMatchObject({
            id: "2",
            name: "Book Two",
            author: "Author Two",
            price: "15",
        });
    });

    test("getBookById returns undefined for nonexistent book", () => {
        const foundBook = bookService.getBookById("999");
        expect(foundBook).toBeUndefined();
    });
});
