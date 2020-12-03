document.addEventListener('DOMContentLoaded', () => {
  // userShowPOST();
  // userShowPATCH(3); 
  // userShowDELETE(5); 
});

const US_URL = 'http://localhost:3000/user_shows';

// These actions should be available AFTER a user has saved the show!

const userShowPOST = () => {
  data = {
    user_id: 2,
    show_id: 2,
    notes: 'This is just a test!!',
    rating: 99999,
    status: 'still watching'
  }
  options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(US_URL, options)
}

// Update the Saved Show
const userShowPATCH = (us_id) => {
  data = {
    notes: 'This is a patch!',
    rating: 00000,
    status: 'echo echo'
  }
  options = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(`${US_URL}/${us_id}`, options)
}

const userShowDELETE = (us_id) => {  
  options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${US_URL}/${us_id}`, options)
}