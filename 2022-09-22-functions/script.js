// console.log('Perimetras: ' + (10 + 25) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 10) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 30) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 35) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 40) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 45) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 50) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 55) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 60) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 120) * 2 + ' kv.m.');




// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// function hello () {
//     console.log('Labas');
// }

// hello();


// function helloWithName(personName) {
//     console.log('Hello, ' + personName);
// }

// helloWithName('John');
// helloWithName('Doe');


// function perimetras (width, lenght, units = 'm') {
//     let updatedWidth = Number(width);
//     let updatedLenght = Number(lenght);
//     let answer = ((width + lenght) * 2)
//     console.log(`Perimetras: ${answer} kv.${units}` );
// }

// // perimetras(10, 25, 'cm')

// function plotas (width, lenght, units = 'vnt') {
//     let updatedWidth = Number(width);
//     let updatedLenght = Number(lenght);
//     let answer = (width * lenght);
//     return answer;

// }

// // plotas (2, 2)


// function trikampioPlotas (width, lenght, units = 'vnt') {
//     let updatedWidth = Number(width);
//     let updatedLenght = Number(lenght);
//     let answer = (width * lenght / 2);
//     return answer;
// } 

// // trikampioPlotas (4, 4.2)

// function both(width, lenght, units = 'vnt') {
//     trikampioPlotas(width, lenght, units = 'vnt');
//     plotas(width, lenght, units = 'vnt');
//     console.log(answer);
// }

// // both (2, 5)


// function greeting() {
//     let time = 15;
//     let isLoggedIn = false;
//     let personName = 'John';
//     let isBrithday = false;

//     let greeting;
//     let nameText;
//     let brithdayText;

//     let  greetingElement = document.querySelector('p')
// }

let num = 5 
let func = () => {
    let num = 4
    console.log(this.num);
}

func()
console.log('labas');