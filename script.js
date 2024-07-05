


document.addEventListener('DOMContentLoaded', function () {
const form = document..getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message').value;

    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    
    console.log ({ name, email, message });
    // You can add further processing or send the data to a server here



    form.reset();
    alert('Thank you for your message!');
});