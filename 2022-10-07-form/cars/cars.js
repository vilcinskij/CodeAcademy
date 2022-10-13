
const searchForm = document.querySelector('#search-form');
let searchResult = document.querySelector('#search-result');

searchForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    searchResult.textContent = '';

    let elements = event.target.elements;
    let minPrice = elements['min-price'].value;
    let maxPrice = elements['max-price'].value;
    let yeraFrom = elements['yera-from'].value;
    let yearTill = elements['year-till'].value;
    let color = elements.color.value;
    let usedCars = elements['used-cars'].checked;

    let usedCarText = usedCars ? ', used car is possible' : '.'

    let searchMessage = document.createElement('p');
    searchMessage.textContent = `You looking for ${color} car which year from ${yeraFrom} till ${yearTill} and price range from ${minPrice}€ till ${maxPrice}€${usedCarText}`;

    searchResult.append(searchMessage)
})
