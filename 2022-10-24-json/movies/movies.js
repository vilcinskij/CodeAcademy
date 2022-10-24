
let moviesContainer = document.querySelector('#movies-container')


let moviesList = document.createElement('ul');



moviesContainer.append(moviesList)


fetch('./movies.json')
    .then(response => response.json())
    .then(movies => 
        movies.map(interest => {
            let interestsListItem = document.createElement('li');
            interestsListItem.textContent = interest.value;
            moviesList.append(interestsListItem)
        
        }));

