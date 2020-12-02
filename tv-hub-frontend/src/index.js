document.addEventListener("DOMContentLoaded", () => {  
  // getShowsFetch();
  // getUsersFetch();
  handleForm();
});

// const input = 'game of thrones';
// const API_URL = `http://api.tvmaze.com/search/shows?q=${input}`;
const API_URL = `https://api.tvmaze.com/search/shows?q=`;

const SHOWS_URL = `http://localhost:3000/shows`;
const USERS_URL = `http://localhost:3000/users`;

// Gets Show Data from Local Server
const getShowsFetch = () => {
  fetch(SHOWS_URL)
    .then( (response) => response.json() )
    .then( (data) => {
      data.shows.forEach(show => {
        console.log(show);
        renderShow(show);
      });
    });
}

const renderShow = (show) => {
  const nameNode = document.createElement('div');
  nameNode.innerText = show.name;

  const parentNode = document.querySelector('#content');
  parentNode.appendChild(nameNode);
}

// Gets User Data from Local Server
const getUsersFetch = () => {
  fetch(USERS_URL)
    .then( (response) => response.json() )
    .then( (data) => {
      data.users.forEach(user => {
        console.log(user);
        renderUser(user);
      });
    });
}

const renderUser = (user) => {
  const userNode = document.createElement('div');
  userNode.innerText = user.username;

  const parentNode = document.querySelector('#content');
  parentNode.appendChild(userNode);
}


// 
const handleForm  = () => {
  const showForm = document.querySelector('#show-form');

  showForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target[0].value;
    getAPIFetch(input);
  });

}

// Gets Show Data from API
const getAPIFetch = (input) => {
  fetch(`${API_URL}${input}`)
    .then( (response) => response.json() )
    .then( (array) => {
      array.forEach(data => {
        console.log(data)
        renderAPI(data)
      });      
    });
}

const renderAPI = (data) => {
  const nameNode = document.createElement('div');
  nameNode.innerText = data.show.name;

  const imgNode = document.createElement('img');
  imgNode.src = data.show.image.medium;

  const parentNode = document.querySelector('#content');
  parentNode.appendChild(nameNode);
  parentNode.appendChild(imgNode);
}








// GET DATA FROM OWN SERVER
//  
// GET DATA FROM API