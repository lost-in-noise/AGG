'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register');

    registerButton.addEventListener('click', function() {
        // registration form here
        alert('You clicked the Register button!');
    });
});







//burger bar
let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burgerBar');
let navDiv = document.getElementById('navDiv');

burgerBar.addEventListener('click', function() {
    navBar.classList.toggle('activeNav');
    burgerBar.classList.toggle('active');
    navDiv.classList.toggle('mobActive');
})


// contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');

    function validateEmail(email) {
        // Basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear any previous error messages
        errorMessage.textContent = '';
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');

        // Get user input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validate the form fields
        let isValid = true;

        if (name === '') {
            nameInput.classList.add('error');
            errorMessage.textContent = 'Name is required';
            isValid = false;
        }

        if (email === '') {
            emailInput.classList.add('error');
            errorMessage.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            emailInput.classList.add('error');
            errorMessage.textContent = 'Invalid email format';
            isValid = false;
        }

        if (message === '') {
            messageInput.classList.add('error');
            errorMessage.textContent = 'Message is required';
            isValid = false;
        }

        if (!isValid) {
            contactForm.appendChild(errorMessage);
            return;
        }

        // If the form is valid, you can submit it to the server here
        // For this example, we'll just log the data
        console.log('Contact Form Data:');
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Message: ' + message);


        contactForm.reset();
    });
});
