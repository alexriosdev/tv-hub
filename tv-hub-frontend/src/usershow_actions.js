const US_URL = 'http://localhost:3000/user_shows';

// These actions should be available AFTER a user has saved the show!
const userShowPOST = (user_id, show_id) => {
  data = {
    user_id: user_id,
    show_id: show_id,
    notes: 'Share your thoughts here',
    rating: 3,
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
const userShowPATCH = (data, us_id) => {
  console.log('Patching Show..');
  data = {
    notes: data[0].value,
    rating: data[1].value,
    status: data[2].value
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