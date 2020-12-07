// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderSearchForm = () => {
  const searchForm = document.querySelector('#search-form');  
  const formContent = `
  <form action="/action_page.php">
    <label class="label">Search TV Show:</label>
    <input type="text" id="name" value="bones" class="input"><br>
    <input type="submit" value="Search" class="button is-info">
  </form> 
  `;
  searchForm.innerHTML = formContent;

  searchListener();  
}

// Add Listener To The Form
const searchListener  = () => {
  const searchForm = document.querySelector('#search-form');
  const searchDisplay = document.querySelector('#search-display');
  const userCollection = document.querySelector('#user-collection');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();    
    searchDisplay.innerHTML = '';
    userCollection.innerHTML = '';
    const input = event.target[0].value;
    getAPIFetch(input);
  });
}

// Get Show Data from API
const getAPIFetch = (input) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then( (response) => response.json() )
    .then( (objArray) => {
      objArray.forEach(data => {
        // console.log(data.show);
        renderAPI(data.show);
      });      
    });
}

// Dirty Way to Render Elements, Helpful for fast Testing
const renderAPI = (show) => {
  const displayCard = document.createElement('div');
  displayCard.className = 'box';

  const searchContent = `
  <div class="title is-3">${show.name}</div>
  <div class="columns is-multiline is-mobile">
    <div class="column is-half"><img src="${show.image.medium}"></div>
    <div class="column is-half"><strong>Summary</strong> ${show.summary}</div>
  </div>
  <div><strong>Language</strong> ${show.language}</div>
  <div><strong>Type</strong> ${show.type}</div>
  <div><strong>Genres</strong> ${show.genres.join(' | ')}</div>
  <div><strong>Network</strong> ${show.network.name}</div>
  <div><strong>Premiered</strong> ${show.premiered}</div>
  <div><strong>Status</strong> ${show.status}</div>
  <div><strong>Rating</strong> ${show.rating.average}</div>
  <div><strong>Runtime</strong> ${show.runtime} Minutes</div>
  <div><a href="${show.officialSite}"><strong>Official Site</strong></a></div>
  <form action="/action_page.php">
    <input type="submit" value="Add To Collection" class="button is-info">
  </form> 
  `;

  const show_obj = {
    name: show.name,
    image: show.image.medium,
    summary: show.summary,
    language: show.language,
    show_type: show.type,
    genres: show.genres.join(' | '),
    network: show.network.name,
    premiered: show.premiered,
    status: show.status,
    rating: show.rating.average,
    runtime: show.runtime,
    official_site: show.officialSite
  }

  displayCard.innerHTML = searchContent;

  const searchDisplay = document.querySelector('#search-display');
  searchDisplay.appendChild(displayCard);

  displayCard.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Saving show ${show_obj.name}...`);
    showPOST(show_obj); // Goes to show_action.js  
  });  
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