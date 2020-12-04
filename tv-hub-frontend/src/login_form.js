document.addEventListener('DOMContentLoaded', () => {
  renderLoginForm();
});

// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderLoginForm = () => {  
  const loginForm = document.querySelector('#login-form');
  const formContent = `
  <form action="/action_page.php">
    <label class="label">Enter Username:</label>
    <input type="text" id="name" placeholder="puppy" class="input">
    <input type="submit" value="Log In" class="button is-info">
  </form>
  `;
  loginForm.innerHTML = formContent;

  loginListener();
}

// Add Listener To The Form
const loginListener  = () => {
  const loginForm = document.querySelector('#login-form');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target[0].value;

    loginForm.innerHTML = ''; // Clear Login Form

    userPOST(username);

    // Once the login form is submitted,
    // we want to 'redirect' the user to main page
    // where they could see their saved shows
    // or search for new ones.

    // go to search_form.js and show_actions.js
  });
}

const USERS_URL = 'http://localhost:3000/users';
let USER_ID = '';

//  Creates User in local database
const userPOST = (username) => {
  renderWelcome(username); // Optimistic Rendering
  data = { username: username }
  options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(USERS_URL, options)
    .then( (response) => response.json() )
    .then( (user) => {
      USER_ID = user.id;
      renderWelcome(user.username);
      getCollection(USER_ID);
    })
}

const renderWelcome = (username) => {
  const logoutForm = document.querySelector('#logout-form');
  const formContent = `
  <form action="/action_page.php">
    <label class="title is-3">Hello there, ${username}!</label><br>
    <input type="submit" value="Log Out" class="button is-warning is-small">
  </form> 
  `;
  logoutForm.innerHTML = formContent;

  logoutForm.addEventListener('submit', (event) => {
    setTimeout( () => window.location.reload() );
    setTimeout(); // Refreshes the page
  });

  renderSearchForm();
}

const clearElements  = () => {
  const searchForm = document.querySelector('#search-form');
  const searchDisplay = document.querySelector('#search-display');
  const logoutForm = document.querySelector('#logout-form');
  const userCollection = document.querySelector('#user-collection');

  searchForm.innerHTML = '';
  searchDisplay.innerHTML = '';
  logoutForm.innerHTML = '';
  userCollection.innerHTML = '';
  USER_ID = '';
}

