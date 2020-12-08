// Gets Show Data from Local DB
const getCollection = (user_id) => {
  const userCollection = document.querySelector('#user-collection');
  userCollection.innerHTML = `<div class="section"><div class="title is-2 has-text-centered">My Collection</div></div>`;

  fetch(`http://localhost:3000/users/${user_id}`)
    .then( (response) => response.json() )
    .then( (data) => {
      console.log(data)
      data.shows.forEach(show => renderCollection(show) );        
      data.user_shows.forEach(us => renderUserNotes(us) );
    });
}

// Renders the Show Elements
const renderCollection = (show) => {
  const displayCard = document.createElement('div');
  displayCard.className = 'columns is-centered';

  const displayContent = `
  <div class="column is-10">
    <div class="box">
      <div class="title is-2">${show.name}</div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-third image"><img src="${show.image}"></div>
        <div class="column is-half"><strong class="title is-5">Synopsis</strong>${show.summary}</div>
      </div>
      <div><strong>Language</strong> ${show.language}</div>
      <div><strong>Type</strong> ${show.show_type}</div>
      <div><strong>Genres</strong> ${show.genres}</div>
      <div><strong>Network</strong> ${show.network}</div>
      <div><strong>Premiered</strong> ${show.premiered}</div>
      <div><strong>Status</strong> ${show.status}</div>
      <div><strong>Rating</strong> ${show.rating}</div>
      <div><strong>Runtime</strong> ${show.runtime} Minutes</div>
      <div><a href="${show.official_site}"><strong>Official Site</strong></a></div>
      <br>
      <input type="hidden" value="${show.id}">
      <div id="show-id-${show.id}" class="box has-background-light"></div>
    </div>
  </div>
  `;

  displayCard.innerHTML = displayContent;

  const userCollection = document.querySelector('#user-collection');
  userCollection.appendChild(displayCard);
}

// Render the UserShow elements
const renderUserNotes = (us) => {  
  const displayCard = document.createElement('div');

  const optionsContent = `
  <form action="/action_page.php">
    <div class="title is-4">Personal Notes</div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" rows="2" cols="40">${us.notes}</textarea>
      </div>
    </div>
    <div class="label">Rating</div>
    <div class="field>
      <div class="control">
        <div class="select">
          <select>
            <option value="${us.rating}" selected disabled hidden>${starConverter(us.rating)}</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
      </div>
    </div>
    <div class="label">Status</div>
    <div class="field>
      <div class="control">
        <div class="select">
          <select>
            <option value="${us.status}" selected disabled hidden>${us.status}</option>
            <option value="still watching">still watching</option>
            <option value="finished watching">finished watching</option>
          </select>
        </div>
      </div>
    </div>
    <br><br>
    <div class="level is-mobile">
      <div class="level-left"><input type="submit" value="Update Notes" class="button is-info"></div>
      <div id="button-id-${us.id}" class="level-right"><button class="button is-danger is-right">Delete</button></div>
    </div>
  </form> 
  `;

  displayCard.innerHTML = optionsContent;

  const showOptions = document.querySelector(`#show-id-${us.show_id}`);
  showOptions.appendChild(displayCard);

  displayCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const us_data = event.target;
    console.log(`Updating Item [${us.id}]...`);
    userShowPATCH(us_data, us.id);
  });

  const deleteBtn = document.querySelector(`#button-id-${us.id}`);

  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Deleting Item [${us.id}]...`);    
    showOptions.parentNode.parentNode.removeChild(showOptions.parentNode); // Clears the items from view    
    userShowDELETE(us.id);
  });
}

// Convert the rating value to stars
const starConverter = (value) => {
  star = ''
  for (let i = 0; i < value; i++) {
    star += '⭐';    
  }
  return star; 
}
