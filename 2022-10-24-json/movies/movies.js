fetch('./movies.json')
  .then(response => response.json())
  .then(movies => console.log(movies));