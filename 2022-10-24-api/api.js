
let chuckJoke = document.querySelector('#chuck-joke');
let randomJokeButton = document.querySelector('#random-joke-button');
let categoryForm = document.querySelector('#joke-by-category');
let searchForm = document.querySelector('#search-form');


randomJokeButton.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(joke => chuckJoke.textContent = joke.value)
})

let jokeCategorySelect = document.querySelector('#joke-category-select')

fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => res.json())
    .then(categories => {
        categories.map(category => {
            let categorySelectOption = document.createElement('option');
            categorySelectOption.textContent = category;
            jokeCategorySelect.append(categorySelectOption)
        })
    })

categoryForm.addEventListener('submit', event => {
    event.preventDefault();
    fetch(`https://api.chucknorris.io/jokes/random?category=${jokeCategorySelect.value}`)
        .then(res => res.json())
        .then(joke => chuckJoke.textContent = joke.value)
})

searchForm.addEventListener('submit', event => {
    event.preventDefault()
    let searchInput = event.target.elements['search-input'].value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            let jokes = data.result;
            let length = data.total;

            if(!jokes) {
                chuckJoke.textContent = data.message
                return
            }

            if (length < 1) {
                chuckJoke.textContent = 'No joke';
                return;
            }
            let randomIndex = Math.floor(Math.random() * length);
            let randomJoke = jokes[randomIndex].value;
            chuckJoke.textContent = randomJoke;

        })
})


