
let moviesContainer = document.querySelector('#movies-container')



fetch('./movies.json')
    .then(res => res.json())
    .then(movies => {
        movies.map(movie => {
            // addListItem(movie)
            let moviesListItem = document.createElement('div');
            moviesListItem.classList.add('card', 'border-dark', 'p-3', 'mb-4')
            moviesListItem.style.width = '360px'

            let title = document.createElement('h4');
            title.textContent = `${movie.title} (${movie.year})`;
            title.classList.add('card-title');
            
            let description = document.createElement('p');
            description.textContent = movie.description;
            
            let ranking = document.createElement('span');
            ranking.textContent = `${movie.rating.average} (${movie.rating.votes})`
            ranking.classList.add('card-subtitle', 'mb-2');

            let genres = addList(movie.genres);
            let directors = addList(movie.directors); 
            let cast = addList(movie.cast); 

            let genresWrapper = document.createElement('div');
            genresWrapper.innerHTML= '<h5>Genres</h5>';
            genresWrapper.append(genres);

            let castWrapper = document.createElement('div');
            castWrapper.innerHTML= '<h5>Cast</h5>';
            castWrapper.append(cast);

            let directorsWrapper = document.createElement('div');
            directorsWrapper.innerHTML= '<h5>Directors</h5>';
            directorsWrapper.append(directors);


            moviesContainer.append(moviesListItem)
            moviesListItem.append(title, ranking, genresWrapper, description, directorsWrapper, castWrapper);
        })
    })

function addList(elementsArr) {
    let list = document.createElement('ul');
    elementsArr.map(element => {
        let listElement = document.createElement('li');
        listElement.textContent = element;
        list.append(listElement);
    })
    return list
}

function listWrapper(list) {
    
}
