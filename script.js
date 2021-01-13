const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using contraint API. CheckValidity returns true if all the html validations has been passed. If they are true, then we can start validting with the below JS
  isValid = form.checkValidity();
  // style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // if form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'All Fields Filled Successfully!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // do somehting with user data (send to backend for further validation)
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
  // submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
    message.textContent = 'Successfully Registered';
  }
}

// Event listener
form.addEventListener('submit', processFormData);
password2El.addEventListener('input', validateForm);
