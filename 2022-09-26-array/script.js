// let numsArray = [5, 4];
// let numsArray2 = [5, 4, 9, 5, 15];

// console.log(numsArray);

// console.log(numsArray.length);

// console.log(numsArray[0]);


// for (let i = 0; i < numsArray.length; i++) {
//     console.log(numsArray[i]);

// }


// function arrayForLoop(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// arrayForLoop(numsArray)


// let pricesArray = [1.25, 2.36, 4.25, 8.46, 9.27, 8.25, 6.36, 88.15, 69.70, 0.95];

// let namessArray = ['Tom', 'John', 'Phillip', 'Doe', 'Bill', 'Paul', 'Christian', 'Charlz', 'Donald', 'Justin']

// let arraysArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]

// function displayArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let display = arr[i];
//         console.log(display);
//     }
// }

// displayArray(namessArray)
// console.log('------------------------------');
// console.log(namessArray.pop());
// console.log('------------------------------');
// console.log(namessArray);
// console.log('------------------------------');
// let firstName = namessArray.shift()
// console.log(firstName);
// console.log('------------------------------');
// console.log(namessArray);
// console.log('------------------------------');
// let newArrayCount = namessArray.push('JOnas', 'Petras', 'Antanas')
// console.log(newArrayCount);
// console.log('------------------------------');
// console.log(namessArray);


// let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];

// console.log(countries.slice(-6, 2));


// let cartItems = ['Bulvės', 'Morkos', 'Kriaušės', 'Obuoliai', 'Pienas', 'Duona', 'Makaronai'];

// let sliceTask1 = cartItems.slice(0, 2);
// console.log(sliceTask1);

// let sliceTask2 = cartItems.slice(-3);
// console.log(sliceTask2);


// let moviesList = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5', 'Film6', 'Film7', 'Film8', 'Film9', 'Film10'];


// let task1 = films.slice(0, 5);
// console.log(task1);

// let task2 = films.slice(-4);
// console.log(task2);

// let task3 = films.slice(2, 6);
// console.log(task3);

// let task4 = films.slice(1, 3);
// console.log(task4);

// let task5 = films.slice(1);
// console.log(task5);

// let task6 = films.slice(2, 7);
// console.log(task6);

// let task7 = films.slice(-4, -1);
// console.log(task7);


// let task8 = films.splice(4, 1, 'Pirmas naujas filmas', 'Antras nauajs filmas');
// // console.log(task8);
// console.log(films);


// UŽDUOTIS (papildoma):
// 1. Sukurti 10-ies skaičių masyvą.
// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"
// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"
// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"
// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"

// let task111 = films.slice(0, 3);
// console.log(task111);

// let task112 = films.slice(-4, -1);
// console.log(task112);

// let task113 = task111.concat(task112);
// console.log(task113);

// let task1130 = task113.reverse();
// console.log(task1130);

// let task114 = [task111, task112].flat().reverse();
// console.log(task114);

// let task115 = [...task111, ...task112].reverse();
// console.log(task115);


// //////////////////////////////////////////////////////////////////////////////



// console.log(moviesList);

// console.log('------------------------------------------');


// function listMovies(arr) {
//     console.log(arr);
//     let moviesListElement = document.querySelector('#movies-list');

//     for (let i = 0; i < arr.length; i++) {
//         // moviesListElement.innerHTML = '<li>' + arr[i] + '</li>';
//         // console.log(arr[i]);

//         let movieName= arr[i];
//         let movieNumber = i + 1;
//         moviesListElement.innerHTML +=`<li></li>`

//     }



// }

// listMovies(moviesList)



// //////////////////////////////////////////////////////////////////////////////


// let movieNamesList = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5', 'Film6', 'Film7', 'Film8', 'Film9', 'Film10'];
// let movieYearsList = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];

// function listMoviesWithYear(names, years) {
//     console.log(names);
//     console.log(years);
//     let moviesListElement = document.querySelector('#movies-list')

//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//         console.log(years[i]);

//         console.log(`${names[i]} (${years[i]})`);
//         moviesListElement.innerHTML += '<li>' + (i + 1) + '. ' + names[i] + ' (' + years[i] + ')</li>';
//     }
// }

// listMoviesWithYear(movieNamesList, movieYearsList)



// let moviesWithYear = [
//     ['Filmas1', 2001],
//     ['Filmas3', 2003],
//     ['Filmas2', 2002],
//     ['Filmas4', 2004],
//     ['Filmas5', 2005],
//     ['Filmas6', 2006],
//     ['Filmas7', 2007],
//     ['Filmas8', 2008],
//     ['Filmas9', 2009],
//     ['Filmas10', 20010]
// ]

// console.log(moviesWithYear);

// function listMoviesWithYear2 (moviesArr) {
//     console.log(moviesArr);
// }

// listMoviesWithYear2(moviesWithYear)


// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.


// let movies1 = ['Filmas1', 'Filmas2', 'Filmas3', 'Filmas4', 'Filmas5', 'Filmas6', 'Filmas7', 'Filmas8', 'Filmas9', 'Filmas10', 'Filmas11'];
// let movies2 = ['Filmas12', 'Filmas13', 'Filmas14'];
// let movies3 = ['Filmas15', 'Filmas16'];


// let allMovies = [movies1, movies2, movies3];
// console.log(allMovies);

// function listMultiMoviesArray(arr) {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//         // console.log(arr[i][1]);
//         // console.log(arr[i][2]);
//         // console.log(arr[i][3]);
//     }
// }

// // listMultiMoviesArray(allMovies)

// console.log('----------------------MAP----------------------------');

// let countriesArr = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// console.log(countriesArr);

// for (let i = 0; i < countriesArr.length; i++) {
//     // console.log(countriesArr);
//     // console.log(i);
//     console.log(countriesArr[i]);
// }

// console.log('---------------------->----------------------------');


// countriesArr.map((country, index, array) => {
//     console.log(index);
//     console.log(country);
//     console.log(array);
// })




// // Masyvas / array
// let numsArray = [5, 4, 6, 456, 789, 4641, 4, 3154, 124.456];
// // Indeksai      0  1  2   3    4     5   6    7      8
// console.log(numsArray.length);
// console.log(numsArray);
// let numsArray2 = [4, 3154, 124.456];
// let strArray = ['Vienas', 'Du', 'Trys', 3.5, 'Keturi', true, [2, 3, 5]];
// // Indeksai         0      1      2      3       4      5        6
// //                                                            0  1  2    
// console.log(strArray);
// console.log(strArray[6]);
// console.log(strArray[6][0]);
// console.log(strArray[6][1]);
// console.log(strArray[6][2]);
// // Masyve esančių duomenų pasiekimas
// // console.log(numsArray[0]);
// // console.log(numsArray[1]);
// // console.log(numsArray[2]);
// // console.log(numsArray[3]);
// // console.log(numsArray[4]);
// // console.log(numsArray[5]);
// // console.log(numsArray[6]);
// // console.log(numsArray[7]);
// // console.log(numsArray[8]);
// // for (let i = 0; i < numsArray.length; i++) {
// //   console.log(numsArray[i]);
// // }
// function arrayForLoop(arr) {
//   console.log(arr);
//   // console.log(arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// arrayForLoop(numsArray2);
// arrayForLoop(numsArray);
// arrayForLoop(strArray);
// // Užduotis (masyvai):
// // 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// // 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.
// let arr1 = [54, 78, 65, 1, 457];
// let arr2 = ['Vienas', 'Du', 'Trys', 'Keturi'];
// let arr3 = ['Vienas', 2, 2.5, 'Trys', 'Trys su puse'];
// console.log(arr3[2]);
// arr3[2] = 2.9;
// console.log(arr3[2]);
// arr3[5] = 'Keturi';
// arr3[arr3.length] = 5;
// arrayForLoop(arr1);
// arrayForLoop(arr2);
// arrayForLoop(arr3);
// let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
// console.log(cities);
// // pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą
// // Pašalina paskutinį masyvo narį - pop() metodas
// // console.log(cities.pop());
// let lastCity = cities.pop();
// console.log(lastCity);
// console.log(cities);
// // Pašalina pirmą masyvo narį - shift() metodas
// let firstCity = cities.shift();
// console.log(firstCity)
// console.log(cities);
// // Pridedamas naujas narys į masyvo pabaigą - push() metoras
// // let newArrayCount = cities.push('Jonava');
// let newArrayCount = cities.push('Jonava', 'Jurbarkas');
// console.log(newArrayCount);
// console.log(cities);
// // Pridedamas narys į masyvo pradžią - ushift() metodas
// // let newArrayCount2 = cities.unshift('Vilnius');
// let newArrayCount2 = cities.unshift('Vilnius', 'Panevėžys');
// console.log(newArrayCount2);
// console.log(cities);
// let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// // Indeksas           0           1        2          3         4         5
// // Slice (+)    0           1         2         3         4          5
// // Slice (-)   -6          -5        -4        -3        -2         -1
// // SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
// console.log('----------SLICE----------');
// console.log(countries);
// let slicedCountries1 = countries.slice(2);
// console.log(slicedCountries1);
// let slicedCountries2 = countries.slice(2, 4);
// console.log(slicedCountries2);
// let slicedCountries3 = countries.slice(0, 3);
// console.log(slicedCountries3);
// let slicedCountries4 = countries.slice(-4);
// console.log(slicedCountries4);
// let slicedCountries5 = countries.slice(-4, -2);
// console.log(slicedCountries5);
// let slicedCountries6 = countries.slice(-4, 2);
// console.log(slicedCountries6);
// let slicedCountries7 = countries.slice(2, -2);
// console.log(slicedCountries7);
// let slicedCountries8 = countries.slice(-2, -4);
// console.log(slicedCountries8);
// let slicedCountries9 = countries.slice(4, 2);
// console.log(slicedCountries9);
// let slicedCountries10 = countries.slice(0, 1);
// console.log(slicedCountries10);
// console.log(countries);
// // UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// let goods =   ['Duona', 'Apelsinai','Sūris', 'Sviestas', 'Jogurtas', 'Mėsa', 'Sultys'];
// // Slice (+)  0       1            2       3           4           5       6         7
// // Slice (+) -7      -6           -5      -4          -3          -2      -1         
// // Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// // 1. Išimti pirmus du pirkinius.
// let sliceTask1 = goods.slice(0, 2);
// console.log(sliceTask1);
// // 2. Išimti tris paskutinius pirkinius.
// let sliceTask2 = goods.slice(-3);
// console.log(sliceTask2);
// // 3. Išimti ketvirtą ir penktą pirkinį.
// let sliceTask3 = goods.slice(3, 5);
// console.log(sliceTask3);
// // 4. Išimti antrą ir trečią pirkinį.
// let sliceTask4 = goods.slice(1, 3);
// console.log(sliceTask4);
// // 5. Išimti visus, išskyrus pirmą pirkinį.
// let sliceTask5 = goods.slice(1);
// console.log(sliceTask5);
// // SPLICE - modifikuoja (mutuoja) originalų masyvą
// let nums = [1, 2, 3, 4, 5, 6, 7];
// console.log('----------SPLICE------------');
// console.log(nums);
// // let spliceNums = nums.splice(2);
// // let spliceNums = nums.splice(0, 1);
// // let spliceNums = nums.splice(2, 1);
// // let spliceNums = nums.splice(2, 3);
// // let spliceNums = nums.splice(2, 1);
// // let spliceNums = nums.splice(-1);
// // let spliceNums = nums.splice(-3, 2);
// // let spliceNums = nums.splice(-3, 2, 2);
// // let spliceNums = nums.splice(-3, 2, 'Du');
// // let spliceNums = nums.splice(1, 2, 'Labas');
// // let spliceNums = nums.splice(2, 1, 'Du su puse');
// // let spliceNums = nums.splice(2, 0, 'Du su puse');
// let spliceNums = nums.splice(2, 0, 2.5, 2.8);
// console.log(spliceNums);
// console.log(nums);
// let movies = ['Godfather', 'Shawshank redemption', 'Batman', 'Superman', 'Spiderman', 'Green Mile', 'Forest Gump', 'Men in black', 'Rush hour', 'Hangover'];
// // Sukurti 10-ties filmų masyvą ir iš jo:
// // 1. Išimti pirmus 5 filmus.
// // let task1 = movies.splice(0, 5);
// let task1 = movies.slice(0, 5);
// console.log(task1);
// // 2. Išimti 4 paskutinius filmus.
// // let task2 = movies.splice(-4);
// let task2 = movies.slice(-4);
// console.log(task2);
// // 3. Išimti nuo trečio iki septinto filmo.
// // let task3 = movies.splice(2, 5);
// let task3 = movies.slice(2, 7);
// console.log(task3);
// // 4. Išimti antrą ir trečią filmą.
// // let task4 = movies.splice(1, 2);
// let task4 = movies.slice(1, 3);
// console.log(task4);
// // 5. Išimti visus, išskyrus pirmą filmą.
// // let task5 = movies.splice(1);
// let task5 = movies.slice(1);
// console.log(task5);
// // 6. Išimti 5 filmus skaičiuojant nuo trečio.
// // let task6 = movies.splice(2, 5);
// let task6 = movies.slice(2, 7);
// console.log(task6);
// // 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
// // let task7 = movies.splice(-4, 3);
// let task7 = movies.slice(-4, -1);
// console.log(task7);
// // 8. Vietoje penkto filmo įrašyti du naujus filmus.
// console.log(movies);
// let task8 = movies.splice(4, 1, 'Naujas filmas', 'Antras naujas filmas');
// console.log(task8);
// console.log(movies);
// // 9. Pašalinti pirmą filmą.
// // let task9 = movies.splice(0, 1);
// let task9 = movies.shift();
// console.log(task9);
// console.log(movies);
// // 10. Įrašyti naują filmą į masyvo pradžią.
// movies.splice(0, 0, 'Trecias naujas filmas');
// movies.unshift('Dar vienas naujas filmas');
// console.log(movies);
// // 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// // 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// // 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// let task111 = movies.slice(0, 3);
// console.log(task111);
// let task112 = movies.slice(-4, -1);
// console.log(task112);
// // concat metodas - sujungia masyvus į vieną masyvą
// let task113 = task111.concat(task112).reverse();
// console.log(task113);
// // Flat metodas - masyve esančius kitus masyvus „iškleidžia"
// let task114 = [task111, task112].flat().reverse();
// console.log(task114);
// // Spread operator - iškleidžia masyvą
// let task115 = [...task111, ...task112].reverse();
// console.log(task115);
// // 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
// let moviesList = ['Filmas1', 'Filmas2', 'Filmas3', 'Filmas4', 'Filmas5', 'Filmas6', 'Filmas7', 'Filmas8', 'Filmas9', 'Filmas10'];
// function listMovies(arr) {
//   console.log(arr);
//   let moviesListElement = document.querySelector('#movies-list');
//   arr.map((movieName, index) => {
//     let movieNumber = index + 1;
//     moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName}</li>`;
//   });
//   // for (let i = 0; i < arr.length; i++) {
//   //   // moviesListElement.innerHTML = moviesListElement.innerHTML + '<li>' + arr[i] + '</li>';
//   //   // moviesListElement.innerHTML += '<li>' + (i + 1) + '. ' + arr[i] + '</li>';
//   //   let movieName = arr[i];
//   //   let movieNumber = i + 1;
//   //   // moviesListElement.innerHTML += '<li>' + movieNumber + '. ' + movieName + '</li>';
//   //   moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName}</li>`;
//   // }
// }
// // listMovies(moviesList);
// // 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.
// let movieNamesList = ['Filmas1', 'Filmas2', 'Filmas3', 'Filmas4', 'Filmas5', 'Filmas6', 'Filmas7', 'Filmas8', 'Filmas9', 'Filmas10'];
// let movieYearsList = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
// // 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.
// function listMoviesWithYear(names, years) {
//   if (names.length === years.length) {
//     let moviesListElement = document.querySelector('#movies-list');
//     for (let i = 0; i < names.length; i++) {
//       // console.log(names[i]);
//       // console.log(years[i]);
//       // moviesListElement.innerHTML += '<li>' + (i + 1) + '. ' + names[i] + ' (' + years[i] + ')</li>';
//       // moviesListElement.innerHTML += `<li>${i + 1}. ${names[i]} (${years[i]})</li>`;
//       let movieName = names[i];
//       let movieYear = years[i];
//       let movieNumber = i + 1;
//       moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName} (${movieYear})</li>`;
//     }
//   } else {
//     console.error('Filmų pavadinimo sąrašo ilgis nesutampa su filmų metų sąrašo ilgiu.');
//   }
// }
// // listMoviesWithYear(movieNamesList, movieYearsList);
// // ANTRAS BŪDAS
// let moviesWithYear = [
//   ['Filmas1'],
//   ['Filmas2', 2002],
//   ['Filmas3', 2003],
//   ['Filmas4'],
//   ['Filmas5', 2005],
//   ['Filmas6', 2006],
//   ['Filmas7', 2007],
//   ['Filmas8', 2008],
//   ['Filmas9', 2009],
//   ['Filmas10', 2010],
// ];
// console.log(moviesWithYear);
// // console.log(moviesWithYear[0][0]);
// // console.log(moviesWithYear[0][1]);
// // console.log(moviesWithYear[1][0]);
// // console.log(moviesWithYear[1][1]);
// // console.log(moviesWithYear[2][0]);
// // console.log(moviesWithYear[2][1]);
// function listMoviesWithYear2(moviesArr) {
//   let moviesListElement = document.querySelector('#movies-list');
//   for (let i = 0; i < moviesArr.length; i++) {
//     let movieName = moviesArr[i][0];
//     let movieYear = moviesArr[i][1];
//     let movieNumber = i + 1;
//     // let movieYearText = '';
//     // if (movieYear) {
//     //   movieYearText = '(' + movieYear + ')';
//     // }
//     let movieYearText = movieYear ? '(' + movieYear + ')' : '';
//     let outputText = `<li>${movieNumber}. ${movieName} ${movieYearText}</li>`;
//     moviesListElement.innerHTML += outputText;
//   }
// }
// // listMoviesWithYear2(moviesWithYear);
// // 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// // 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.
// let movies1 = ['filmas1', 'filmas2', 'filmas3', 'filmas4', 'filmas5', 'filmas6', 'filmas7', 'filmas8', 'filmas9', 'filmas10', 'filmas11'];
// let movies2 = ['filmas12', 'filmas13', 'filmas14'];
// let movies3 = ['filmas15', 'filmas16'];
// // let allMovies = movies1.concat(movies2, movies3);
// // let allMovies = [movies1, movies2, movies3].flat();
// // let allMovies = [...movies1, ...movies2, ...movies3];
// // listMovies(allMovies);
// let allMovies = [movies1, movies2, movies3];
// function listMultiMoviesArray(arr) {
//   let moviesListElement = document.querySelector('#movies-list');
//   let movieNumber = 1;
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     // for (let j = 0; j < arr[i].length; j++) {
//     //   console.log(arr[i][j]);
//     // }
//     let innerMoviesArray = arr[i];
//     for (let j = 0; j < innerMoviesArray.length; j++) {
//       let movieName = innerMoviesArray[j];
//       moviesListElement.innerHTML += `<li>${movieNumber}. ${movieName}</li>`;
//       movieNumber++;
//     }
//   }
// }
// // listMultiMoviesArray(allMovies);




// console.log('---------------MAP-----------------');
// console.log('---------------MAP-----------------');
// console.log('---------------MAP-----------------');
// console.log('---------------MAP-----------------');
// console.log('---------------MAP-----------------');
// console.log('---------------MAP-----------------');




// let citiesArr = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė', 'Alytus'];
// console.log(citiesArr);
// for (let i = 0; i < citiesArr.length; i++) {
//   // console.log(citiesArr);
//   console.log(i);
//   console.log('For ciklas: ' + citiesArr[i]);
// }
// // MAP masyvo metodas - paleidzia funkcija kiekvienam masyvo nariui
// // citiesArr.map(city => console.log('Map ciklas: ' + city));
// // citiesArr.map(function(city) {
// //   console.log(city);
// // });
// // citiesArr.map((city) => {
// //   console.log(city);
// // });
// citiesArr.map((city, index, array) => {
//   console.log(array);
//   console.log(index);
//   console.log('Map ciklas: ' + city);
// });

// // citiesArr.forEach((city, index, array) => {
// //   console.log(array);
// //   console.log(index);
// //   console.log('ForEach: ' + city);
// // });

// console.log('---------------FILTER-----------------');
// console.log('---------------FILTER-----------------');
// console.log('---------------FILTER-----------------');
// console.log('---------------FILTER-----------------');
// console.log('---------------FILTER-----------------');
// console.log('---------------FILTER-----------------');

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumArray = numArray.filter(numArray => numArray > 4)

// console.log(filteredNumArray);


// console.log('---------------filter-tasks-1----------------');


// let numsArray = [5, 8, 7, -6, -8, 10, 25, 655, -95, 0, 13, -50, 12, 8, -100, 16, 17, -18, -199, 200]

// let task1_1 = numsArray.filter(num => num > 10)
// console.log(task1_1);

// let task1_2 = numsArray.filter(num => num < 0)
// console.log(task1_2);

// let task1_3 = numsArray.filter(num => (num % 3 == 0) || (num % 5 === 0))
// console.log(task1_3);

// let task1_4 = numsArray.filter(num => (num % 4 === 0) && (num > 13))
// console.log(task1_4);


// console.log('---------------filter-tasks-2----------------');


// let wordArray = [
//   'Lorem',
//   'ipsum',
//   'dolor',
//   'sit',
//   'amet',
//   'consectetur',
//   'adipisicing',
//   'elit',
//   'Necessitatibus',
//   'facilis',
//   'impedit',
//   'Harum',
//   'distinctio',
//   'natus',
//   'sequi',
//   'autem',
//   'reiciendis',
//   'accusamus',
//   'eius',
//   'numquam']

// let task2_1 = wordArray.filter(word => word.endsWith('s'));
// console.log(task2_1);

// let task2_2 = wordArray.filter(word => word.length > 8);
// console.log(task2_2);

// let task2_3 = wordArray.filter(word => word.length % 2 === 1);
// console.log(task2_3);

// let task2_4 = wordArray.filter(word => word.includes('is'));
// console.log(task2_4);


console.log('--------------REDUCE-----------------');
console.log('--------------REDUCE-----------------');
console.log('--------------REDUCE-----------------');
console.log('--------------REDUCE-----------------');
console.log('--------------REDUCE-----------------');
console.log('--------------REDUCE-----------------');

// let reducenumbers = numsArray.reduce((sum, ) => {
//   console.log('veikia');
// }) 

let countriesArray = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy', 'USA', 'UK'];
let reduceString = countriesArray.reduce((prev, current) => {
  return prev + ',' + current
})

console.log(reduceString);