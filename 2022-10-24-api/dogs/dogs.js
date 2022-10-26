
let dogsBreedsList = document.querySelector('#dogs-select');


function init() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            let breedKeys = Object.keys(data.message);
            let breedValue = Object.values(data.message);

            breedKeys.map(data => {
                let breedSelectOption = document.createElement('option');
                breedSelectOption.textContent = data;
                breedSelectOption.value = data;
                dogsBreedsList.append(breedSelectOption)
            })
        })

    const searchForm = document.querySelector('#search-form');

    searchForm.addEventListener('submit', event => {
        event.preventDefault()
        let selectedBreed = event.target.elements['dogs-select'].value;
    })
}

init()

