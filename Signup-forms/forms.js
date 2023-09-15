const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const emailError = document.querySelector('#mail + span.error');
const phone = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        email.textContent = '';
        email.className = '';
    } else {
        showError();
        event.preventDefault();
    }
});

FormData.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
})

function showError() {
    if (email.validity.valueMissing) {
        email.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}