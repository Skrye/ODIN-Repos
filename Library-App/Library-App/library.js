const dialog = document.querySelector('.modal-form');
const showButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close-modal');
const bookshelf = document.querySelector('.bookshelf');

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

function displayLibrary() {
    for (let i= 0; i < myLibrary.length; i++) {
        let bookIDRaw = `${myLibrary[i].title}`;
        let bookID = bookIDRaw.toLowerCase().split(' ').join('');

        let newBook = document.createElement('div');
        newBook.setAttribute('id', bookID);
        newBook.setAttribute('class', book);
        bookshelf.appendChild(newBook);

        let title = document.createElement('h1');
        title.innerHTML = `${myLibrary[i].title}`;
        title.setAttribute('id', bookID);
        newBook.setAttribute('class', title);
        newBook.appendChild(title);

        let author = document.createElement('h2');
        author.innerHTML = `${myLibrary[i].author}`;
        author.setAttribute('id', bookID);
        newBook.setAttribute('class', author);
        newBook.appendChild(author);

        let pageCount = document.createElement('p');
        pageCount.innerHTML = `Pages: ${myLibrary[i].pageCount}`;
        pageCount.setAttribute('id', bookID);
        newBook.appendChild(pageCount);

        let publishedDate = document.createElement('p');
        publishedDate.innerHTML = `Published: ${myLibrary[i].publishedDate}`;
        publishedDate.setAttribute('id', bookID);
        newBook.appendChild(publishedDate);

        let genre = document.createElement('p');
        genre.innerHTML = `Genre: ${myLibrary[i].genre}`;
        genre.setAttribute('id', bookID);
        newBook.appendChild(genre);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'x';
        newBook.appendChild(deleteButton);
        deleteButton.setAttribute('id', bookID);
        deleteButton.onclick = function() {
			let toBeDeleted = document.querySelectorAll(`#${bookID}`);
            toBeDeleted.setAttribute('border-style', none);
			console.table(toBeDeleted)
			for(let j = toBeDeleted.length - 1; j > 0; j--) {
				toBeDeleted[j].remove();
			}    
    	}
    }
    myLibrary = [];
}

displayLibrary();