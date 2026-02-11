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

function renderLibrary() {

    const displayBook = document.querySelector('#book-container');
    displayBook.textContent = '';

    myLibrary.forEach((book) => {

        const card = document.createElement('div');
        card.classList.add('book-card');

        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const ReadStatus = document.createElement('p');

        title.textContent = `TITLE: ${book.title}`;
        author.textContent = `AUTHOR: ${book.author}`;
        pages.textContent = `PAGES: ${book.pages}`;
        ReadStatus.textContent = `READ STATUS: ${book.isRead ? 'Read' : 'Not read'}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(ReadStatus);

        displayBook.appendChild(card);

        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-btn');
        toggleButton.textContent = 'Toggle Read';

        toggleButton.addEventListener('click', () => {
            toggleReadStatus(book.id);
            renderLibrary();
        });

        card.appendChild(toggleButton);

        const removeBookButton = document.createElement('button');
        removeBookButton.classList.add('remove-btn');
        removeBookButton.textContent = 'Remove Book';

        removeBookButton.addEventListener('click', () => {
            removeBookFromLibrary(book.id);
            renderLibrary();
        });

        card.appendChild(removeBookButton);

    });

}


renderLibrary();