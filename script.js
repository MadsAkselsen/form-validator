const form = document.getElementById('form');
const password1El = document.getElementById('passwordEl1');
const password2El = document.getElementById('password2El');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  //Using contraint API
  isValid = form.checkValidity();
  //style main message for an error
  message.textContent = 'Please fill out all fields.';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
  console.log(isValid);
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
}

// Event listener
form.addEventListener('submit', processFormData);
