// document.addEventListener('DOMContentLoaded', () => {
//   // showPOST();
//   // showDELETE(5); 
// });

const SHOWS_URL = 'http://localhost:3000/shows';

// This script should be triggered once a user saves a show

// Create Show Object In Local Database
const showPOST = () => {
  data = {
    name: 'this is a test',
    genre: 'this is a test',
    premiered: 'this is a test',
    image: 'this is a test',
    official_site: 'this is a test'
  }
  options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(SHOWS_URL, options)
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