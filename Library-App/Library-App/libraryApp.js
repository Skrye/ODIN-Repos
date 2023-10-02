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

const myLibrary = [theHobbit, lastBookInTheUniverse];
let renderLibrary = [];
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
    newBook.isRead =  `${newBookArray[5]}`;

    myLibrary.push(newBook);
    renderLibrary = myLibrary.slice(0);
    displayLibrary();
});





const libraryTable = document.getElementById('library-table');

function displayLibrary() {
    for (let i = 0; i < renderLibrary.length; i++) {

        let newBookRow = document.createElement('tr');
        newBookRow.setAttribute('id', `${renderLibrary[i].title}`);
        libraryTable.appendChild(newBookRow);

        let titleCell = document.createElement('td');
        titleCell.innerHTML = `${renderLibrary[i].title}`;
        titleCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(titleCell);

        let authorCell = document.createElement('td');
        authorCell.innerHTML = `${renderLibrary[i].author}`;
        authorCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(authorCell);

        let pageCountCell = document.createElement('td');
        pageCountCell.innerHTML = `${renderLibrary[i].pageCount}`;
        pageCountCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(pageCountCell);

        let publishedDateCell = document.createElement('td');
        publishedDateCell.innerHTML = `${renderLibrary[i].publishedDate}`;
        publishedDateCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(publishedDateCell);

        let genreCell = document.createElement('td');
        genreCell.innerHTML = `${renderLibrary[i].genre}`;
        genreCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(genreCell);

        let isReadCell = document.createElement('td');
        isReadCell.setAttribute('id', `${renderLibrary[i].title}`);
        newBookRow.appendChild(isReadCell);
        if (myLibrary[i].isRead == 'true') {
            isReadCell.innerHTML = 'Yes'
        } else {
            isReadCell.innerHTML = 'No'
        }

        let deleteCell = document.createElement('td');
        deleteCell.setAttribute('id', `${renderLibrary[i].title}`);
        deleteCell.setAttribute('class', `delete-button`);
        newBookRow.appendChild(deleteCell);
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'x';
        deleteCell.appendChild(deleteButton);
        deleteButton.setAttribute('id', `${myLibrary[i].title}`);
        deleteButton.addEventListener('click', deleteRow);
	}
    renderLibrary = [];
}

const deleteRow = function () {
    let toBeDeleted = document.querySelectorAll(`#${renderLibrary[i].title}`);
    console.table(toBeDeleted);
    for(j = toBeDeleted.length - 1; j > 0; j--) {
                toBeDeleted[j].remove();
    }
};

displayLibrary();