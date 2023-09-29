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

function Book() {
    this.title = title;
    this.author = author;
    this.pageCount = pagecount;
    this.publishedDate = publishedDate;
    this.genre = genre;
}

const myLibrary = [theHobbit, lastBookInTheUniverse];

function addBookToLibrary() {
 // grab input from fields, then combine those fields into a new Book, add book to myLibrary array
}

const submitNewBook = document.getElementById('submit-to-library');

window.addEventListener('load', () => {
    function sendData() {

        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let pageCount = document.getElementById('page-count');
        let publishedDate = document.getElementById('published-date');
        let genre = document.getElementById('genre');

        const XHR = new XMLHttpRequest();
        const newBookForm = getElementById('add-to-library');
        const FD = new FormData(newBookForm);

        // on successful submit
        XHR.addEventListener('load', (event) => {
            alert('New book added succesfully.');
            title.value = '';
            author.value = '';
            pageCount.value = '';
            publishedDate.value = '';
            genre.value = '';
        });
        
        // on fialed submit/error
        XHR.addEventListener('error', (event) => {
            alert('Oops! Something went wrong.');
        });
    
        XHR.open('POST', '')
    
        XHR.send(FD);
    }

    newBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendData();
    });
});





const libraryTable = document.getElementById('library-table');

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newBookRow = document.createElement('tr');
        newBookRow.setAttribute('id', `Book ${i}`);
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