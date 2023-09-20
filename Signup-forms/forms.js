// Validation Elements
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const phone = document.getElementById('phone-number');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + span.error');
const formData = document.querySelector("form");

password.addEventListener('input', (event) => {
    if (password.validity.valid && confirmPassword.validity.valid) {
        password.textContent = '';
        password.className = '';
        passwordError.className = '';
        passwordError.textContent = '';
        confirmPasswordError.className = '';
        confirmPasswordError.textContent = '';
    } else {
        password.className = 'active error';
        validatePassword();
        event.preventDefault();
    }
});

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        email.textContent = '';
        email.className = '';
        emailError.textContent = '';
        emailError.className = '';
    } else {
        email.className = 'active error';
        showError();
        event.preventDefault();
    }
});

formData.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (!password.validity.valid) {
        validatePassword();
        event.preventDefault();
    }
})

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}

function validatePassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password at least 8 characters in length, minimum one upper and lowercase letter, and at least one number.';
    } else if (password.validity.typeMismatch) {
        passwordError.textContent = 'Please enter a valid password.';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at ${password.minLength} characters; you entered ${password.value.length}.`;
    }
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.className = 'error active';
    }
}

//Mobile/Desktop Formatting elements
const flexBox = document.getElementById('flexbox-container');
const logoContainer = document.getElementById('logo-container');
const logoBackground = document.getElementById('logo-background');
const logoTextBox = document.getElementById('logo-text-box');
const logoBackgroundSource = document.getElementById('background-source');
const signupContainer = document.getElementById('signup-container');
const signupHeader = document.getElementById('signup-header');
const signupSubmit = document.getElementById('signupSubmit');
const mobileElements = [flexBox, logoContainer, logoBackground, logoTextBox, logoBackgroundSource, signupContainer, signupHeader, signupSubmit]

window.addEventListener('resize', () => {
    if (window.innerWidth < 860) {
        mobileElements.forEach((element) => {
            element.classList.add('mobile');
        })
    }
    if (window.innerWidth > 860) {
        mobileElements.forEach((element) => {
            element.classList.remove('mobile');
        })
    }
})