document.addEventListener('DOMContentLoaded', () => {
  renderLoginForm();
});

// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderLoginForm = () => {  
  const loginForm = document.querySelector('#login-form');
  const formContent = `
  <div class="columns is-centered">
    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
      <div class="box">
        <form action="/action_page.php">
          <div class="field">
            <label class="label">Username</label>
          </div>
          <div class="field">
            <input type="text" id="name" placeholder="Enter Username" class="input">
          </div>
          <div class="field">
            <input type="submit" value="Log In" class="button is-info">
          </div>
        </form>
      </div>
    </div>
  </div>
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
  renderNavbar(username); // Optimistic Rendering
  // renderWelcome(username); // Optimistic Rendering
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
      renderNavbar(user.username);
      getCollection(USER_ID);
    })
}

const renderNavbar = (username) => {
  const navbar = document.querySelector('#navbar-section');
  const navContent = `
  <div class="navbar is-dark is-fixed-top">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <a id="user-home" class="container title is-4 has-text-white">tv hub📺</a>          
        </div>
        <div class="navbar-item">
          <div id="search-form" class="container"></div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">          
          <a id="user-home" class="container title is-4 has-text-primary">${username}</a>          
        </div>
        <a id="logout-button" class="navbar-item subtitle is-6">
          Log Out
        </a>
      </div>
    </div>
  </div>
  `;
  navbar.innerHTML = navContent;
  
  renderSearchForm();

  const logoutBtn = document.querySelector('#logout-button');
  logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    setTimeout( () => { window.location.reload() }, 100 );
    setTimeout(); // Refreshes the page
  });  

  const homeBtns = document.querySelectorAll('#user-home');
  homeBtns.forEach(btn =>
    btn.addEventListener('click', (event) => {
        document.querySelector('#search-display').innerHTML = '';    
        event.preventDefault();    
        getCollection(USER_ID);
      })
    );
}
