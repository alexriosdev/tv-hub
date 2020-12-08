const US_URL = 'http://localhost:3000/user_shows';
let US_ID = '';

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
  .then( (response) => response.json() )
  .then( (data) => US_ID = data.id );
}

// Update the Saved Show
const userShowPATCH = (data, us_id) => {  
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
    .then( (response) => response.json() )
    .then( (data) => console.log(`Item [${us_id}] has been updated!`))
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
    .then( (response) => response.json )
    .then( (data) => console.log(`Item [${us_id}] has been deleted!`) )
}