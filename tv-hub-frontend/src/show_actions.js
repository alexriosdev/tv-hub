// This script should be triggered once a user saves a show
const SHOWS_URL = 'http://localhost:3000/shows';

const test_obj = {
  name: 'This is a test',
  image: 'in the database',
  genre: 'to see if the objects',
  premiered: 'are being saved',
  official_site: '.....'
}

let SHOW_ID = ''

// Create Show Object In Local Database
const showPOST = (show) => {
  options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(show)
  }
  fetch(SHOWS_URL, options)
    .then( (response) => response.json() )
    .then( (data) => {
      SHOW_ID = data.id;
      userShowPOST(USER_ID, SHOW_ID); // This associates the user and the show
      console.log('Show has been saved!')
    });
}

// Delete Show Object In Local Database
const showDELETE = (show_id) => {  
  options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${US_URL}/${show_id}`, options)
}