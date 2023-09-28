const myLibrary = [theHobbit, lastBookInTheUniverse];

function Book() {
    this.title = title;
    this.author = author;
    this.pageCount = pagecount;
    this.publishedDate = publishedDate;
    this.genre = genre;
}

const theHobbit = {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pageCount: 310,
    publishedDate: '1937-09-21',
    genre: 'Fantasy'
};

const lastBookInTheUniverse = {
    title: 'The Last Book in the Universe',
    author: 'Rodman Philbrick',
    pageCount: 240,
    publishedDate: '2002-03-1',
    genre: 'Dystopian'
};

function addBookToLibrary() {
 // grab input from fields, then ombine those fields into a new Book, add book to myLibrary array
}

const libraryDisplay = document.getElementById('library-table');

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newRow = document.createElement('tr');
        newRow.setAttribute('id', `Book ${i}`);
        libraryDisplay.appendChild(newRow);
        let titleTable = document.createElement('td');
        titleTable.innerHTML = `${myLibrary[i].title}`;
        newRow.appendChild(titleTable);
    }
}

displayLibrary();