const books = [];

class BookService {
    getAllBooks() {
        return books;
    }

    getBookById(id) {
        return books.find((book) => book.id === id);
    }

    createBook(book) {
        books.push(book);
        return book;
    }

    updateBook(id, updatedData) {
        const book = this.getBookById(id);
        if (book) {
            book.name = updatedData.name || book.name;
            book.author = updatedData.author || book.author;
            book.price = updatedData.price || book.price;
        }
        return book;
    }

    deleteBook(id) {
        const index = books.findIndex((book) => book.id === id);
        if (index > -1) {
            return books.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new BookService();
