// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.

let moviesList = ['Filmas1', 'Filmas2', 'Filmas3', 'Filmas4', 'Filmas5', 'Filmas6', 'Filmas7', 'Filmas8', 'Filmas9', 'Filmas10'];

function listMovies(arr) {
    console.log(arr);
    let moviesListElement = document.querySelector('#movies-list');
    arr.map((movieName, index) => {
        let movieNumber = index + 1;
        moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName}</li>`;
    })
}
// listMovies(moviesList);




// 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.

let movieNamesList = ['Filmas1', 'Filmas2', 'Filmas3', 'Filmas4', 'Filmas5', 'Filmas6', 'Filmas7', 'Filmas8', 'Filmas9', 'Filmas10'];
let movieYearsList = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
// 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.
function listMoviesWithYear(names, years) {
    if (names.length === years.length) {
        
        let moviesListElement = document.querySelector('#movies-list');

        names.map((name, index) => {
            
            let movieName = name;
            let movieYear = years[index];
            let movieNumber = index + 1;
            moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName} (${movieYear})</li>`;
        })
    } else {
        console.error('Filmų pavadinimo sąrašo ilgis nesutampa su filmų metų sąrašo ilgiu.');
    }
}
// listMoviesWithYear(movieNamesList, movieYearsList);


// ANTRAS BŪDAS
let moviesWithYear = [
    ['Filmas1'],
    ['Filmas2', 2002],
    ['Filmas3', 2003],
    ['Filmas4'],
    ['Filmas5', 2005],
    ['Filmas6', 2006],
    ['Filmas7', 2007],
    ['Filmas8', 2008],
    ['Filmas9', 2009],
    ['Filmas10', 2010],
];
// console.log(moviesWithYear);

function listMoviesWithYear2(moviesArr) {
    let moviesListElement = document.querySelector('#movies-list');

    moviesArr.map((movie, index) => {
        let movieName = movie[0];
        let movieYear = movie[1];
        let movieNumber = index + 1;
        let movieYearText = movieYear ? '(' + movieYear + ')' : '';
        let outputText = `<li>${movieNumber}. ${movieName} ${movieYearText}</li>`;
        moviesListElement.innerHTML += outputText;
    })

    for (let i = 0; i < moviesArr.length; i++) {

    }
}
// listMoviesWithYear2(moviesWithYear);


// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.
let movies1 = ['filmas1', 'filmas2', 'filmas3', 'filmas4', 'filmas5', 'filmas6', 'filmas7', 'filmas8', 'filmas9', 'filmas10', 'filmas11'];
let movies2 = ['filmas12', 'filmas13', 'filmas14'];
let movies3 = ['filmas15', 'filmas16'];
let allMovies = [movies1, movies2, movies3];
function listMultiMoviesArray(arr) {
    let moviesListElement = document.querySelector('#movies-list');
    let movieNumber = 1;

    arr.map((innerArr)=>{
        innerArr.map((movieName) => {
            moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName}</li>`;
            movieNumber++;
        })
    })
}
listMultiMoviesArray(allMovies);