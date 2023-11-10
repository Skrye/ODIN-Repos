const dialog = document.querySelector('.modal-form');
const showButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close-modal');

showButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

class Book {
    constructor(title, author, pageCount, publishedDate, genre, isRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.publishedDate = publishedDate;
        this.genre = genre;
        this.isRead = isRead;
    }
};

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 310, '1937-09-21', 'Fantasy', 'true');
const lastBookInTheUniverse = new Book('The Last Book in the Universe', 'Rodman Philbrick', 240, '2002-03-01', 'Dystopian', 'false');

let myLibrary = [theHobbit, lastBookInTheUniverse];

function addBookToLibrary() {

}