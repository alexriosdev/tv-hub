document.addEventListener("DOMContentLoaded", () => {  
  getDataFetch();
});

const input = 'game of thrones';

const URL = `http://api.tvmaze.com/singlesearch/shows?q=${input}`;

const getDataFetch = () => {
  fetch(URL)
    .then( (response) => response.json() )
    .then( (data) => console.log(data) );
}