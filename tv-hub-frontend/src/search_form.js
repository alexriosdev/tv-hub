document.addEventListener("DOMContentLoaded", () => {
  renderSearchForm();
  formListener();
});

// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderSearchForm = () => {
  const searchForm = document.querySelector('#search-form');
  const formContent = `
  <form action="/action_page.php">
    <label>Search TV Show:</label><br>
    <input type="text" id="name" value="bones"><br>
    <input type="submit" value="Submit">
  </form> 
  `;
  searchForm.innerHTML = formContent;  
}

// Add Listener To The Form
const formListener  = () => {
  const searchForm = document.querySelector('#search-form');
  const searchDisplay = document.querySelector('#search-display');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchDisplay.innerHTML = ''; // Clear the previous cards
    const input = event.target[0].value;
    getAPIFetch(input);
  });
}

// Gets Show Data from API
const getAPIFetch = (input) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then( (response) => response.json() )
    .then( (objArray) => {
      objArray.forEach(data => {
        renderAPI(data.show)
      });      
    });
}

// Dirty Way to Render Elements, Helpful for fast Testing
const renderAPI = (show) => {
  // console.log(show)
  const displayCard = document.createElement('div');
  displayCard.class = 'display-card';

  const searchContent = `
    <div><h3>${show.name}</h3></div>
    <div><img src="${show.image.medium}" width="30%" height="30%"></div>
    <div><strong>Genres</strong> ${show.genres.toString()}</div>
    <div><strong>Premiered</strong> ${show.premiered}</div>
    <div><a href="${show.officialSite}"><strong>Official Site</strong></a></div>
    <div><button type="button">Save Show!</button></div>
  `;  
  displayCard.innerHTML = searchContent;

  const searchDisplay = document.querySelector('#search-display');
  searchDisplay.appendChild(displayCard);

  buttonListener();
  
}

const buttonListener = () => {
  const saveBtn = document.querySelector('button');
  saveBtn.addEventListener('click', () => {
    console.log('Feature Not Implemented Yet.')
  })
}

// CLEAN WAY TO CREATE ELEMENTS
// const renderSearchForm = () => {
//   const formNode = document.createElement('form');
//   formNode.id = 'search-form';

//   const labelNode = document.createElement('label');
//   labelNode.innerText = 'Search TV Shows';

//   const inputNode = document.createElement('input');
//   inputNode.type = 'text';
//   inputNode.placeholder = 'Breaking Bad';

//   const submitNode = document.createElement('submit');

//   formNode.appendChild(labelNode);
//   formNode.appendChild(inputNode);
//   formNode.appendChild(submitNode);

//   const parentNode = document.querySelector('#content');
//   parentNode.appendChild(formNode);  
// }

// const renderAPI = (data) => {
//   const nameNode = document.createElement('div');
//   nameNode.innerText = data.show.name;

//   const imgNode = document.createElement('img');
//   imgNode.src = data.show.image.medium;

//   const parentNode = document.querySelector('#content');
//   parentNode.appendChild(nameNode);
//   parentNode.appendChild(imgNode);
// }