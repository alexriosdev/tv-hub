// Dirty Way to Create Elements, Does Not Mantain Permanence
const renderSearchForm = () => {
  const searchForm = document.querySelector('#search-form');  
  const formContent = `
  <form action="/action_page.php">
    <div class="field has-addons">
      <div class="control"><input type="text" id="name" placeholder="Search TV Show"class="input"></div>
      <div class="control"><input type="submit" value="Search" class="button"></div>
    </div>
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
    searchDisplay.innerHTML = '<div class="section"><div class="title is-2 has-text-centered">Search Results</div></div>';
    userCollection.innerHTML = '';
    const input = event.target[0].value;
    event.target.reset(); 
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
  displayCard.className = 'columns is-centered';

  const searchContent = `
  <div class="column is-10">
    <div class="box">
      <div class="title is-2">${show.name}</div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-third image"><img src="${show.image.medium}"></div>
        <div class="column is-half"><strong class="title is-5">Synopsis</strong> ${show.summary}</div>
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
        <div class="columns is-mobile is-centered">
          <input type="submit" value="Add To Collection" class="button is-info">    
        </div>    
      </form>
    </div>
  </div>
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

  // Add a toggle
  displayCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputElement = event.target[0];    
    if (inputElement.value === 'Add To Collection') {      
      inputElement.parentNode.innerHTML = `<input type="submit" value="Remove From Collection" class="button is-danger">`;
      console.log(`Saving show ${show_obj.name}...`);
      showPOST(show_obj); // Goes to show_action.js  
    } else {
      inputElement.parentNode.innerHTML = `<input type="submit" value="Add To Collection" class="button is-info">`;
      console.log(`Deleting Item [${US_ID}]...`);
      userShowDELETE(US_ID);
    }
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