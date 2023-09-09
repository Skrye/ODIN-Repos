const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

email.addEventListener('input', (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Must be a valid email address.');
    } else {
        email.setCustomValidity('');
    }
})