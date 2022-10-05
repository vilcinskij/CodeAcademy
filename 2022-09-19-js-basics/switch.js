// let pAnswer31 = 1;
// let pAnswer32 = 0;
// let pAnswer33 = 0;
// let cAnswer31 = 1;
// let cAnswer32 = 1;
// let cAnswer33 = 1;
// let answer31 = pAnswer31 === cAnswer31;
// let answer32 = pAnswer32 === cAnswer32;
// let answer33 = pAnswer33 === cAnswer33;
// let outputText3 = '';
// let successText = 'Patekai i kita lygi: ';
// let failText = 'Nepatekai i kita lygi: ';
// if (answer31 && answer32 && answer33) {
//   outputText3 = successText + 'visi atsakymai buvo teisingi.';
// } else if (answer32 && answer33) {
//   outputText3 = successText + 'pirmas atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (answer31 && answer33) {
//   outputText3 = successText + 'antras atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (answer31 && answer32) {
//   outputText3 = successText + 'trecias atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (answer31) {
//   outputText3 = failText + 'pirmas atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (answer32) {
//   outputText3 = failText + 'antras atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (answer33) {
//   outputText3 = failText + 'trecias atsakymas buvo teisingas, o kiti neteisingi.';
// } else {
//   outputText3 = failText + 'visi atsakymai buvo neteisingi.';
// }
// console.log(outputText3);
// document.querySelector('p').textContent = outputText3;



// let grade = 5;

// let gradeInWords

// console.log(grade);
// console.log(typeof grade);

// if (grade === 1) {
//     console.log(`Labai blogai`);
// } else if (grade === 2) {
//     console.log(`Blogai`);
// } else if (grade === 3) {
//     console.log(`Vidutiniškai`);
// } else if (grade === 4) {
//     console.log(`Gerai`);
// } else if (grade === 5) {
//     console.log(`Puikiai`);
// } else {
//     console.log('Įvestas blogas skaičius');
// }


// let grade = 4;

// let gradeInWords


// switch (grade) {
//     case 1:
//         gradeInWords = 'Labai blogai';
//         break;
//     case 2:
//         gradeInWords = 'Blogai';
//     case 3:
//         gradeInWords = 'Vidutiniškai';
//         break;
//     case 4:
//         gradeInWords = 'Gerai';
//         break;
//     case 5:
//         gradeInWords = 'Puikiai';
//         break;
//     default:
//         gradeInWords = 'Įvestas blogas skaičius';

// }

// console.log(gradeInWords);

// let grade = 9;
// let gradeInWords;

// switch (grade) {
//     case 1:
//     case 2:
//         gradeInWords = 'Labai blogai';   
//         break;  
//     case 3:
//     case 4:
//         gradeInWords = 'Blogai';
//         break;
//     case 5:
//     case 6:
//         gradeInWords = 'Vidutiniškai';
//         break;
//     case 7:
//     case 8:
//         gradeInWords = 'Gerai';
//         break;
//     case 9:
//     case 10:
//         gradeInWords = 'Puikiai';
//         break;
//     default:
//         gradeInWords = 'Įvestas blogas skaičius';
// }

// console.log(gradeInWords);


// let weekDay = 3;
// let today;
// let errorText;
// let middleText;

// switch (weekDay) {
//     case 1:
//     case 2:
//     case 3:
//         today = 'Savaitės vidurys ir '
//     case 4:
//     case 5:
//         today = 'Darbo diena'
//         break;
//     case 6:
//     case 7:
//         today = 'Šiandien savaitgalis'
//         break;
//     default:
//         today = 'Įvesta netinkama reikšmė'
// }

// console.log(today);




// let lightColor = 'yellow'
// let lightColorElement = document.querySelector('p')

// console.log(lightColor);

// lightColorElement.style.fontSize = '70px'
// lightColorElement.style.textTransform = 'uppercase'
// lightColorElement.style.textAlign = 'center'
// lightColorElement.style.padding = '30px'
// lightColorElement.style.color = 'white'


// switch (lightColor) {
//     case 'green':
//         lightColorElement.textContent = 'Galima Eiti'
//         lightColorElement.style.backgroundColor = 'green'
//         break;
//     case 'yellow':
//         lightColorElement.textContent = 'Pasiruošti'
//         lightColorElement.style.backgroundColor = 'yellow'
//         break;
//     case 'red':
//         lightColorElement.textContent = 'STOP'
//         lightColorElement.style.backgroundColor = 'red'
//         break;
// }


// age = 5
// console.log(age);
// console.log(typeof age);
// let personAgeText;

// switch (age) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         personAgeText = 'Mokinys į mokyklą neina';
//         break;
//     case 6:
//         personAgeText = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
//         break;
//     case 7:
//     case 8:
//     case 9:
//         personAgeText = 'Mokinys eina į pradinę klasę'
//         break;
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//         personAgeText =
// break;
//     case 14:
//         personAgeText =
// break;
//     case 15:
//     case 16:
//     case 17:
//         personAgeText = 'Mokinys eina į gimnaziją';
//         break;
//     case 18:
//         personAgeText = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
//         break;
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 24:
//     case 25:
//     case 26:
// }






// if (isNaN(age)) {
//     console.log('Reikia įvesti skaičių');
// }else if (age < 0) {
//     console.log("Įvestas amžius yra per mažas");
// } else if (age < 6) {
//     console.log('Mokinys į mokyklą neina');
// } else if (age <7) {
//     console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
// } else if (age < 10) {
//     console.log('Mokinys eina į pradinę klasę');
// } else if (age <11) {
//     console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
// } else if (age < 14) {
//     console.log('Mokinys eina į pagrindinė klasę');
// } else if (age <15) {
//     console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
// } else if (age < 18) {
//     console.log('Mokinys eina į gimnaziją');
// } else if (age <19) {
//     console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
// } else if (age < 120) {
//     console.log('Mokinys mokyklą baigė');
// } else {
//     console.log('Įvestas amžius yra per didelis');
// } 



let grade = 9;
let gradeInWords;

switch (grade) {
    case 1:
    case 2:
        gradeInWords = 'Labai blogai';   
        break;  
    case 3:
    case 4:
        gradeInWords = 'Blogai';
        break;
    case 5:
    case 6:
        gradeInWords = 'Vidutiniškai';
        break;
    case 7:
    case 8:
        gradeInWords = 'Gerai';
        break;
    case 9:
    case 10:
        gradeInWords = 'Puikiai';
        break;
    default:
        gradeInWords = 'Įvestas blogas skaičius';
}

console.log(gradeInWords);