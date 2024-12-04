// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('backButton');
// TODO: Create a function that builds an element and appends it to the DOM
function AppendElement(tag, content, parent) {
  const element = document.createdElement(tag);
  element.textContent = content;
  parent.appendChild(element);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  AppendElement('p', 'no blog posts', mainElement);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogPosts = readLocalStorage('blogData');

  if (blogPosts.length === 0) {
    handleNoPosts();
  } else {
  blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');

  AppendElement('h2', post.title, postElement);
  AppendElement('p', post.content, postElement);
            
  mainElement.appendChild(postElement);
    });
  }
}
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};