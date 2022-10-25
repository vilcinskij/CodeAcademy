
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
            title.textContent = `${movie.title}, ${movie.year}`;
            title.classList.add('card-title');

            let description = document.createElement('p');
            description.textContent = movie.description;

            let genres = addList(movie.genres);
            let directors = addList(movie.directors); 
            let cast = addList(movie.cast); 
            

            moviesContainer.append(moviesListItem)
            moviesListItem.append(title, genres, description, directors, cast);
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
