let cities = [
    {
        name: 'Sydney',
        population: 5200000,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttractions: ['Sydney Opera House'],
        isCapital: true,
    },
    {
        name: 'Quebec',
        population: 8500000,
        location: {
            continent: 'North America',
            country: 'Canada',
        },
        touristAttractions: ['The Chateau Frontenac'],
        isCapital: false,
    },
    {
        name: 'Rio de Janeiro',
        population: 6700000,
        location: {
            continent: 'South America',
            country: 'Brazil',
        },
        touristAttractions: ['Christ the Redeemer', 'Palacio Pedro Ernesto', 'Tiradentes Palace', 'Guanabara Palace'],
        isCapital: true,
    },
    {
        name: 'Johannesburg ',
        population: 5600000,
        location: {
            continent: 'Africa',
            country: 'South Africa',
        },
        touristAttractions: [],
        isCapital: false,
    },
    {
        name: 'Lima',
        population: 9700000,
        location: {
            continent: 'South America',
            country: 'Peru',
        },
        touristAttractions: ['Lima Metropolitan Cathedral', 'Park of the Reserve', 'Plaza Mayor de Lima', 'La Marina Lighthouse', 'San Isidro'],
        isCapital: true,
    },
    {
        name: 'Dresden',
        population: 500000,
        location: {
            continent: 'Europe',
            country: 'Germany',
        },
        touristAttractions: ['Dresden Castle', 'Church of Our Lady'],
        isCapital: false,
    },
    {
        name: 'London',
        population: 9000000,
        location: {
            continent: 'Europe',
            country: 'UK',
        },
        touristAttractions: ['Trafalgar Square', 'London Eye', 'Tower Bridge'],
        isCapital: true,
    },
    {
        name: 'Vilnius',
        population: 600000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
        },
        touristAttractions: [],
        isCapital: true,
    },
    {
        name: 'New York',
        population: 8800000,
        location: {
            continent: 'North America',
            country: 'USA',
        },
        touristAttractions: ['Central Park', 'Brooklyn Bridge', 'Grand Central Terminal', 'Statue of Liberty', 'Times Square'],
        isCapital: false,
    },
    {
        name: 'Toronto',
        population: 2800000,
        location: {
            continent: 'North America',
            country: 'Canada',
        },
        touristAttractions: ['CN Tower', 'Ontario Legislative Building', 'Humber Bay Arch Bridge'],
        isCapital: false,
    },
]

function task1_6_2() {
    cities.map(city => {
        let cityWapper = document.querySelector('#cities-wrapper')

        let { name, population, isCapital, touristAttractions } = city;
        let { continent, country } = city.location;
        let capitalCity = '';
        let capitalText = '';
        let atractionItem = '';
        let atractiontext = '';
        let touristAttractionsWrapper = '';
        let capitalClass = '';

        if (touristAttractions.length === 1) {
            atractiontext = `<h4>Main Tourist attraction of ${name} is</h4>`
        } else if (touristAttractions.length > 1) {
            atractiontext = `<h4>Main Tourist attractions of ${name} are</h4>`
        }
        touristAttractions.map((atraction) => {
            atractionItem += `<li>${atraction}</li>`;
            touristAttractionsWrapper = `<ul>${atractionItem}</ul>`

        })

        if (isCapital) {
            capitalCity = ` (capital)`
            capitalText = ` ${name} is the capital of ${country}.`
            capitalClass = 'capital'
        }

        let cityItem = `<div class="city-item ${capitalClass}">
                       <h2 class="city-name">${name}${capitalCity}</h2>
                       <p>${name} is located in ${continent}, ${country} and has population of ${population} people.${capitalText}</p>
                       ${atractiontext}
                       ${touristAttractionsWrapper}
                       </div>`
        cityWapper.innerHTML += cityItem;

    })
}
task1_6_2()


let capitalNames = document.querySelectorAll('.capital h2');
capitalNames.forEach((element) => {
    element.style.color = 'blue'
})

let citiElement = document.querySelectorAll('.city-item');
for (let i = 0; i < citiElement.length; i += 2) {
    citiElement[i].style.backgroundColor = 'lightblue'
}

let firstTouristAttraction = document.querySelectorAll('li:first-child');
firstTouristAttraction.forEach((element) => {
    element.style.color = 'yellowgreen'
})

let task5_4 = document.querySelectorAll('li:nth-child(1n+4)');
task5_4.forEach((element) => {
    element.style.color = 'red'
})


function task6() {
    let citiWrapper = document.querySelector('#cities-wrapper')
    citiWrapper.style = `display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 30px;`

    let allCities = document.querySelectorAll('.city-item')
    allCities.forEach((city) => {
        city.style.width = '48%'
    })

    if (cities.length % 2 !== 0) {
        console.log('labas');
        let lastCity = document.querySelector('.city-item:last-child')
        lastCity.style.width = '100%'
    }
}

task6();


// lastTouristAttraction





// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."

// 5. Naudojant tik JavaScript:
// 5.1. Pakeisti visų sostinių teksto spalvą.
// 5.2. Pakeisti kas antro miesto fono spalvą.
// 5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
// 5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
