console.groupCollapsed('JS Basics')

// console.log('veikia');
//  
// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis
// 2. Kintamojo pavadinimas
// 3. Lyginimo ženklas
// 4. Kintamojo verte

// var vardas = "John"; //STring (taktas) teksto kintamasis
// let pavarde = "Doe";
// let miestas = `Kaunas`;
// const ASMENS_KODAS = 484848484848; //Bumber tipo kintamasis
// let yraStudentas = false;
// let amzius = 25

// console.log(vardas);
// console.log(pavarde);
// console.log(miestas);


// console.log("Hello, " + vardas + " " + pavarde + ", how are you");
// console.log(`Hello, ${vardas} ${pavarde}, how are you?`);
// console.log(ASMENS_KODAS * 3);

// console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${ASMENS_KODAS}, gyvenamasis miestas: ${miestas}.`);
// console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + ASMENS_KODAS + ", gyvenamasis miestas: " + miestas + ".");
// console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + ASMENS_KODAS + ', gyvenamasis miestas: ' + miestas + '.');

// console.log('John said "Good morning"')

// console.log("John said \\\"Good morning")



// // console.log(30 == 30);

// // console.log("vienas" == "vienas");



// console.log('----------------IF, ELSE IF, ELSE-------------');

// let light = 'RED'

// console.log(light);
// console.log(light.toLocaleLowerCase())

// light = light.toLocaleLowerCase()

// if (light == 'green') {
//     console.log('Galima eiti')
// } else if (light == 'yellow') {
//     console.log('Pasiruošk')
// } else if (light == 'red') {
//     console.log('STOP')
// } else {
//     console.log('Sugedo')
// }

// let ageString = '-ssss'

// let age = Number(ageString);

// if (age < 0) {
//     console.log("Įvestas neigimas skaičius");
// } else if (age >= 0 && age < 16) {
//     console.log('Pirkti negalima')
// } else if (age >= 16 && age < 18) {
//     console.log('Galima pirkti su tėvų sutikimu');
// } else if (age >= 18 && age < 120) {
//     console.log('Pirkti galima');
// } else if (age > 120) {
//     console.log('Blogai įvestas amžius virš 120')
// } else {
//     console.log('Įvestas ne skaičius')
// }
// let passLength = pass.replaceAll(' ', '').length;



// let pass = '         8544         95555555#5555595     ';
// let passTrim = pass.trim();
// let passTrimLength = passTrim.length;
// let char = '#';

// if (!pass.includes(char)) {
//     console.log('Slaptažodyje nėra panaudotos "#"');
// } else if (passTrimLength < 16) {
//     console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// } else if (passTrimLength < 20) {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
// } else {
//     console.log('Slaptažodis tinkamas');
// }


// age = prompt('Įveskite amžių')
// console.log(age);

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



// let greetingElement = document.querySelector('h1');
// console.dir(greetingElement.textContent);

// greetingElement.textContent = 'Sveikas'



// let today = new Date();

// let isLoggedIn = true;
// let personName = 'John';
// let time = today.getHours();
// let isBirthday = true;

// let morning = 'Good Morning, ';
// let afternoon = 'Good Afternoon, ';
// let evening = 'Good Evening, ';

// let birthday =' and have a great birthday!';
// let hello;

// if (time < 5 || time >= 19 ) {
//     hello = evening
// } else if (time < 12) {
//     hello = morning
// } else if (time < 19) {
//     hello = afternoon
// }

// if (!isBirthday) {
//     birthday = '.';
// }

// if (isLoggedIn) {
//     console.log(`${hello}${personName}${birthday}`);
// } 


// console.log('-------------------1 LYGYS-----------------------------');

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





// let promptValue = prompt('Įveskite vertinimą nuo 1 iki 5')

// let grade = Number(promptValue);

// let grade = 5;

// let one = 'Labai blogai'
// let two = 'Blogai'
// let three = 'Vidutiniškai'
// let four = 'Gerai'
// let five = 'Puikiai'

// let gradeInWords

// console.log(grade);
// console.log(typeof grade);

// if (grade === 1) {
//     console.log(`${one}`);
// } else if (grade === 2) {
//     console.log(`${two}`);
// } else if (grade === 3) {
//     console.log(`${three}`);
// } else if (grade === 4) {
//     console.log(`${four}`);
// } else if (grade === 5) {
//     console.log(`${five}`);
// } else {
//     console.log('Įvestas blogas skaičius');
// }


console.groupEnd()