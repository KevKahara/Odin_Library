let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
}

function toggleReadStatus(id) {
    const foundBook = myLibrary.find(book => book.id === id);
    if(foundBook) {
        foundBook.isRead = !foundBook.isRead;
    }
}
