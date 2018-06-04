const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const resultsSection = document.querySelector('#results');

const API_URL = 'https://omdb-api.now.sh/?type=movie&s=';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  getResults(searchTerm);
}

function getResults(searchTerm) {
  const url = `${API_URL}${searchTerm}`;
  fetch(url)
    .then(response => response.json())
    .then(data => showResults(data.Search));
}

function showResults(results) {
  resultsSection.innerHTML = '';
  let html = '';
  results.forEach(movie => {
    html += `
    <div class="card col-4">
      <img class="card-img-top" src="${movie.Poster}" alt="${movie.Title}">
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">${movie.Year}</p>
      </div>
    </div>
    `;
  });
  resultsSection.innerHTML = html;
}
