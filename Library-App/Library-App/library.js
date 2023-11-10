const dialog = document.querySelector('.modal-form');
const showButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close-modal');

showButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})