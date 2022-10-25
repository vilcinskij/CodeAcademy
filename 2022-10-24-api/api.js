
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
    let searchInput = document.querySelector('#search-input').value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
        .then(res => res.json())
        .then(joke => {
            if (joke.result.length >= 0) {
                let randomElement = Math.floor(Math.random() * joke.result.length);
                chuckJoke.textContent = joke.result[randomElement].value;
            } else {console.log('chack will kill you');}
        })
})


