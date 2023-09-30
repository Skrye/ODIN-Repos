class Book {
    constructor(title, author, pageCount, publishedDate, genre) {
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

const submitNewBook = document.getElementById('add-to-library');

submitNewBook.addEventListener('submit', (e) => {
    e.preventDefault();

    const FD = new FormData(submitNewBook);
    let newBookArray = [];
    for (item of FD) {
        newBookArray.push(item[1])
    }

    const newBook = Object.create(theHobbit);

    newBook.title = `${newBookArray[0]}`;
    newBook.author = `${newBookArray[1]}`;
    newBook.pageCount = `${newBookArray[2]}`;
    newBook.publishedDate = `${newBookArray[3]}`;
    newBook.genre = `${newBookArray[4]}`;

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
        titleCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(titleCell);

        let authorCell = document.createElement('td');
        authorCell.innerHTML = `${myLibrary[i].author}`;
        authorCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(authorCell);

        let pageCountCell = document.createElement('td');
        pageCountCell.innerHTML = `${myLibrary[i].pageCount}`;
        pageCountCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(pageCountCell);

        let publishedDateCell = document.createElement('td');
        publishedDateCell.innerHTML = `${myLibrary[i].publishedDate}`;
        publishedDateCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(publishedDateCell);

        let genreCell = document.createElement('td');
        genreCell.innerHTML = `${myLibrary[i].genre}`;
        genreCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(genreCell);

        let isReadCell = document.createElement('td');
        isReadCell.setAttribute('id', `${myLibrary[i].title}`);
        newBookRow.appendChild(isReadCell);
        if (myLibrary[i].isRead == 'true') {
            isReadCell.innerHTML = 'Yes'
        } else {
            isReadCell.innerHTML = 'No'
        }

        let deleteCell = document,createElement('td');
        newBookRow.appendChild(deleteCell);
        let deleteButton = document.createElement('button');
        deleteCell.appendChild(deleteButton);
        deleteButton.setAttribute('id', `${myLibrary[i].title}`);
        deleteButton.addEventListener('onclick', deleteBook());
    }
    myLibrary = [];
}

const deleteBook = () => {
    let toBeDeleted = document.querySelectorAll(`${this.id}`);
    for (i = toBeDeleted.length; i > 0; i--) {
        toBeDeleted[i].remove();
    }
};

displayLibrary();