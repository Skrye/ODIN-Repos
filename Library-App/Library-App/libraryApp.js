class Book {
    constructor(title, author, pageCount, publishedDate, genre) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.publishedDate = publishedDate;
        this.genre = genre;
    }
};

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 310, '1937-09-21', 'Fantasy');

const lastBookInTheUniverse = new Book('The Last Book in the Universe', 'Rodman Philbrick', 240, '2002-03-01', 'Dystopian');

const myLibrary = [theHobbit, lastBookInTheUniverse];

/*
function addBookToLibrary() {
 // grab input from fields, then combine those fields into a new Book, add book to myLibrary array
}
*/
const submitNewBook = document.getElementById('add-to-library');

submitNewBook.addEventListener('submit', (e) => {
    e.preventDefault();

    const FD = new FormData(submitNewBook);
    
    const newBook = Object.create(theHobbit);

    newBook.title = `${FD[0][1]}`;
    newBook.author = `${FD[1][1]}`;
    newBook.pageCount = `${FD[2][1]}`;
    newBook.publishedDate = `${FD[3][1]}`;
    newBook.genre = `${FD[4][1]}`;

    console.table(newBook);

    myLibrary.push(newBook);
    displayLibrary();
});





const libraryTable = document.getElementById('library-table');

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newBookRow = document.createElement('tr');
        newBookRow.setAttribute('id', `${myLibrary[i].title}`);
        libraryTable.appendChild(newBookRow);
        let titleCell = document.createElement('td');
        titleCell.innerHTML = `${myLibrary[i].title}`;
        newBookRow.appendChild(titleCell);
        let authorCell = document.createElement('td');
        authorCell.innerHTML = `${myLibrary[i].author}`;
        newBookRow.appendChild(authorCell);
        let pageCountCell = document.createElement('td');
        pageCountCell.innerHTML = `${myLibrary[i].pageCount}`;
        newBookRow.appendChild(pageCountCell);
        let publishedDateCell = document.createElement('td');
        publishedDateCell.innerHTML = `${myLibrary[i].publishedDate}`;
        newBookRow.appendChild(publishedDateCell);
        let genreCell = document.createElement('td');
        genreCell.innerHTML = `${myLibrary[i].genre}`;
        newBookRow.appendChild(genreCell);
    }
}

displayLibrary();