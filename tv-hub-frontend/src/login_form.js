document.addEventListener("DOMContentLoaded", () => {
  renderLoginForm();
  formListener();
});

// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderLoginForm = () => {
  const loginForm = document.querySelector('#login-form');
  const formContent = `
  <form action="/action_page.php">
    <label>Enter Username:</label><br>
    <input type="text" id="name" placeholder="test"><br>
    <input type="submit" value="Submit">
  </form> 
  `;
  loginForm.innerHTML = formContent;  
}

// Add Listener To The Form
const formListener  = () => {
  const loginForm = document.querySelector('#login-form');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();    
    const input = event.target[0].value;
    console.log(input);
    userPOST(input);


    // Once the login form is submitted,
    // we want to 'redirect' the user to main page
    // where they could see their saved shows
    // or search for new ones.

    // got to search_form.js
    // && show_actions.js
  });
}

const USERS_URL = 'http://localhost:3000/users';

//  Creates User in local database

const userPOST = (input) => {
  data = { username: input }
  options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(USERS_URL, options)
}



