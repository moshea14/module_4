// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
event.preventDefault();

const formData = new FormData(form);
const data = {};
formData.forEach((value, key) => {
  data[key] = value;
});

if (!data.title || !data.content) {
  displayErrorMessage('please fill in all required fields.');
  return;
}

storeLocalStorage('blogData', data);
redirectPage('blog.html');
}

function displayErrorMessage(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);

function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};