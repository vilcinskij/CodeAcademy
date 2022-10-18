console.groupCollapsed('task1')

// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

let arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
console.log('---------PIRMINIS MASYVAS--------------');
console.log(arr);

// 1.1. Pašalinti pirmą masyvo narį.
console.log('------------1.1. Pašalinti pirmą masyvo narį.-------------');

let task1_1 = arr.shift();
console.log(arr);

// 1.2. Pašalinti paskutinį masyvo narį.
console.log('------------1.2. Pašalinti paskutinį masyvo narį.-----------');

let task1_2 = arr.pop()
console.log(arr);

// 
console.log('---------1.3. Rasti vidurinį masyvo narį ir jį pašalinti-----------');

let task1_3 = arr.splice((arr.length / 2), 1)
console.log(arr);

// 
console.log('---------1.4. Pašalinti priešpaskutinį masyvo narį.-----------');

let task1_4 = arr.splice(-2, 1)
console.log(arr);

// 
console.log('---------1.5. Pašalinti antrą masyvo narį.-----------');

let task1_5 = arr.splice(1, 1)
console.log(arr);

// 
console.log('---------1.6. Pašalinti 7 ir 8 masyvo narius.-----------');

let task1_6 = arr.splice(6, 2)
console.log(arr);

// 
console.log('---------1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.-----------');

let task1_7 = arr.splice(-6, 3)
console.log(arr);

// 
console.log('---------1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.-----------');

let task1_8 = arr.splice(2, 1, 888)
console.log(arr);

// 
console.log('---------1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.-----------');

let task1_9 = arr.splice(9, 1, 33, 789, 6543)
console.log(arr);

// 
console.log('---------1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.-----------');

let task1_10 = arr.splice(-1, 1, 321, 654, 987)
console.log(arr);

// 
console.log('---------1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.-----------');

let task1_11 = arr.splice(1, 0, 11)
console.log(arr);

// 
console.log('---------1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.-----------');

let task1_12 = arr.splice(13, 0, 1)
console.log(arr);

// 
console.log('---------1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.-----------');

let task1_13 = arr.splice(-1, 0, -1)
console.log(arr);

// 
console.log('---------1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.-----------');

let task1_14 = arr.splice(0, 0, 1, 2, 3)
console.log(arr);

// 
console.log('---------1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.-----------');

let task1_15 = arr.push(-333, -321, -312)
console.log(arr);

// 
console.log('---------1.16. Į masyvo vidurį pridėti skaičių 0.-----------');

let task1_16 = arr.splice((arr.length / 2), 0, 0)
console.log(arr);

// 
console.log('---------1.17. Pašalinti pirmą masyvo narį.-----------');

let task1_17 = arr.shift()
console.log(arr);

// 
console.log('---------1.18. Pašalinti paskutinį masyvo narį.-----------');

let task1_18 = arr.pop()
console.log(arr);

// 
console.log('---------1.19. Į masyvo pradžią pridėti žodį "start".-----------');

let task1_19 = arr.splice(0, 0, 'start')
console.log(arr);

// 
console.log('---------1.20. Į masyvo pabaigą pridėti žodį "end".-----------');

let task1_20 = arr.push('end')
console.log(arr);

console.groupEnd('task1')


// /////////////////////////////////////////////////////////////////////////////////

console.groupCollapsed('task2')

// 
console.log('--2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę--');
console.log(arr);

// 
console.log('---------2.1. Gauti pirmą masyvo narį.-----------');

let task2_1 = arr.slice(0, 1)
console.log(task2_1);

// 
console.log('---------2.2. Gauti paskutinį masyvo narį.-----------');

let task2_2 = arr.slice(-1)
console.log(task2_2);

// 
console.log('---------2.3. Gauti antrą masyvo narį-----------');

let task2_3 = arr.slice(1, 2)
console.log(task2_3);

// 
console.log('---------2.4. Gauti priešpaskutinį masyvo narį.-----------');

let task2_4 = arr.slice(-2, -1)
console.log(task2_4);

// 
console.log('---------2.5. Gauti aštuntą masyvo narį.-----------');

let task2_5 = arr.slice(7, 8)
console.log(task2_5);

// 
console.log('---------2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.-----------');

let task2_6 = arr.slice(-8, -7)
console.log(task2_6);

// 
console.log('---------2.7. Gauti vidurinį masyvo narį.-----------');

let task2_7 = arr.slice(((arr.length) / 2), ((arr.length) / 2 + 1))
console.log(task2_7);

// 
console.log('---------2.8. Gauti pirmus tris masyvo narius.-----------');

let task2_8 = arr.slice(0, 3)
console.log(task2_8);

// 
console.log('---------2.9. Gauti paskutinius tris masyvo narius.-----------');

let task2_9 = arr.slice(-3)
console.log(task2_9);

// 
console.log('---------2.10. Gauti pirmus 10 masyvo narius.-----------');

let task2_10 = arr.slice(0, 10)
console.log(task2_10);

// 
console.log('---------2.11. Gauti paskutinius 10 masyvo narius.-----------');

let task2_11 = arr.slice(-10)
console.log(task2_11);

// 
console.log('---------2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).-----------');

let task2_12 = arr.slice(2, 8)
console.log(task2_12);

// 
console.log('---------2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).-----------');

let task2_13 = arr.slice(-9, -4)
console.log(task2_13);

// 
console.log('---------2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).-----------');

let task2_14 = arr.slice(10, 19)
console.log(task2_14);

// 
console.log('---------2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).-----------');

let task2_15 = arr.slice(-17, -8)
console.log(task2_15);


console.log('---------2.16. Gauti visus masyvo narius išskyrus pirmą.-----------');

let task2_16 = arr.slice(1)
console.log(task2_16);

//
console.log('--------- 2.17. Gauti visus masyvo narius išskyrus paskutinį.-----------');

let task2_17 = arr.slice(0, -1)
console.log(task2_17);

// 
console.log('---------2.18. Gauti visus masyvo narius išskyrus pirmus 5.-----------');

let task2_18 = arr.slice(5)
console.log(task2_18);

//
console.log('-------- 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.-----------');

let task2_19 = arr.slice(0, -5)
console.log(task2_19);

// 
console.log('---------2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).-----------');

let task2_20 = arr.slice(0, (arr.length / 2))
console.log(task2_20);

// 
console.log('---------2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).----------');

let task2_21 = arr.slice((arr.length / 2 + 1))
console.log(task2_21);

// 
console.log('---------2.22. Gauti visus narius išskyrus pirmą ir paskutinį.-----------');

let task2_22 = arr.slice(1, -1)
console.log(task2_22);

// 
console.log('---------2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.-----------');

let task2_23 = arr.slice(5, -3)
console.log(task2_23);

// 
console.log('---------2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.---------');

let task2_24 = arr.slice(1, -8)
console.log(task2_24);

// 
console.log('---------2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.-----------');

let task2_25 = arr.slice(7, -1)
console.log(task2_25);

// 
console.log('--------2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.---------');

let task2_26 = arr.slice(9, -12)
console.log(task2_26);

// 
console.log('---------2.27. Gauti 9 narius skaičiuojant nuo 11.-----------');

let task2_27 = arr.slice(10, 19)
console.log(task2_27);

// 
console.log('---------2.28. Gauti 12 narių skaičiuojant nuo 8.-----------');

let task2_28 = arr.slice(7, 19)
console.log(task2_28);

// 
console.log('---------2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.-----------');

let task2_29_1 = arr.slice(0, 5)
let task2_29_2 = arr.slice(-6)
console.log(task2_29_1.concat(task2_29_2));

// 
console.log('---------2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.-----------');

let task2_30_1 = arr.slice(2, 5)
let task2_30_2 = arr.slice(14, 17)
console.log(task2_30_1.concat(task2_30_2));


console.groupEnd('task2')


// /////////////////////////////////////////////////////////////////////////////////

console.groupCollapsed('task3')

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. 
// Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

// 3.1. Gauti tik teigiamus skaičius.
let task3_1 = arr.filter(task => task > 0);
console.log(`task3.1:    ${task3_1}`);
// 3.2. Gauti tik neigiamus skaičius.

let task3_2 = arr.filter(task => task < 0);
console.log(`task3.2:    ${task3_2}`);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.

let task3_3 = arr.filter(task => task % 2 === 0);
console.log(`task3.3:    ${task3_3}`);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.

let task3_4 = arr.filter(task => task % 3 === 0);
console.log(`task3.4:    ${task3_4}`);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

let task3_5 = arr.filter(task => task % 5 === 0);
console.log(`task3.5:    ${task3_5}`);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

let task3_6 = arr.filter(task => task % 11 === 0);
console.log(`task3.6:    ${task3_6}`);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

let task3_7 = arr.filter(task => task % 31 === 0);
console.log(`task3.7:    ${task3_7}`);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let task3_8 = arr.filter(task => task % 2 === 0 && task % 3 === 0);
console.log(`task3.8:    ${task3_8}`);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let task3_9 = arr.filter(task => task % 3 === 0 && task % 7 === 0);
console.log(`task3.9:    ${task3_9}`);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let task3_10 = arr.filter(task => task % 5 === 0 && task % 9 === 0);
console.log(`task3.10:    ${task3_10}`);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

let task3_11 = arr.filter(task => task % 5 === 0 && task % 11 === 0);
console.log(`task3.11:    ${task3_11}`);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

let task3_12 = arr.filter(task => task % 2 === 0 && task % 8 === 0 && task % 12 === 0);
console.log(`task3.12:    ${task3_12}`);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

let task3_13 = arr.filter(task => task % 2 === 0 || task % 3 === 0);
console.log(`task3.13:    ${task3_13}`);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

let task3_14 = arr.filter(task => task % 3 === 0 || task % 5 === 0);
console.log(`task3.14:    ${task3_14}`);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.

let task3_15 = arr.filter(task => task % 2 === 5 || task % 6 === 0);
console.log(`task3.15:    ${task3_15}`);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

let task3_16 = arr.filter(task => task % 2 === 7 || task % 8 === 0);
console.log(`task3.16:    ${task3_16}`);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

let task3_17 = arr.filter(task => task % 9 === 0 || task % 13 === 0);
console.log(`task3.17:    ${task3_17}`);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

let task3_18 = arr.filter(task => task % 2 === 0 || task % 3 === 0 || task % 5 === 0);
console.log(`task3.18:    ${task3_18}`);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

let task3_19 = arr.filter(task => task % 5 === 0 || task % 7 === 0 || task % 9 === 0);
console.log(`task3.19:    ${task3_19}`);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

let task3_20 = arr.filter(task => task % 7 === 0 || task % 8 === 0 || task % 11 === 0);
console.log(`task3.20:    ${task3_20}`);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.

let task3_21 = arr.filter(task => task % 2 === 9 || task % 12 === 0 || task % 13 === 0);
console.log(`task3.21:    ${task3_21}`);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

let task3_22 = arr.filter(task => task > 100)
console.log(`task3_22:    ${task3_22}`);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.

let task3_23 = arr.filter(task => task > 555)
console.log(`task3_23:    ${task3_23}`);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

let task3_24 = arr.filter(task => task >= 888)
console.log(`task3_24:    ${task3_24}`);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

let task3_25 = arr.filter(task => task >= 6789)
console.log(`task3_25:    ${task3_25}`);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

let task3_26 = arr.filter(task => task < 50)
console.log(`task3_26:    ${task3_26}`);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

let task3_27 = arr.filter(task => task < 1000)
console.log(`task3_27:    ${task3_27}`);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

let task3_28 = arr.filter(task => task <= -1)
console.log(`task3_28:    ${task3_28}`);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.

let task3_29 = arr.filter(task => task <= -5564)
console.log(`task3_29:    ${task3_29}`);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.

let task3_30 = arr.filter(task => task < 1000 && task > 500);
console.log(`task3_30:    ${task3_30}`);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

let task3_31 = arr.filter(task => task < 100 && task > 0);
console.log(`task3_31:    ${task3_31}`);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

let task3_32 = arr.filter(task => task < 0 && task > -50);
console.log(`task3_32:    ${task3_32}`);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

let task3_33 = arr.filter(task => task <= 0 && task > -100);
console.log(`task3_33:    ${task3_33}`);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.

let task3_34 = arr.filter(task => task >= 0 && task < 55);
console.log(`task3_34:    ${task3_34}`);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

let task3_35 = arr.filter(task => task >= 444 && task <= 654);
console.log(`task3_35:    ${task3_35}`);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.

let task3_51 = arr.filter(task => !isNaN(task));
console.log(`task3_51:    ${task3_51}`);

// 3.52. Gauti tik tekstus (string).

let task3_52 = arr.filter(task => isNaN(task));
console.log(`task3_52:    ${task3_52}`);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.

let task3_53 = arr.filter(task => isNaN(task) && task.length > 5);
console.log(`task3_53:    ${task3_53}`);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.

let task3_56 = arr.filter(task => isNaN(task) && task.includes('t'));
console.log(`task3_56:    ${task3_56}`);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.77. Gauti tik tekstus (string), kurių trečia simbolis yra a.
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.




console.groupEnd('task3')



// /////////////////////////////////////////////////////////////////////////////////

console.group('task4')


// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. 
// Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).

function task4_1() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            console.log(arr[i]);
        }
    }
}
task4_1()

console.log('----------------------');

// 4.2. Tik tekstą (string tipo duomenis).

function task4_2() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            console.log(arr[i]);
        }
    }
}
// task4_2()

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

function task4_3(typeOfData) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === typeOfData) {
            // console.log(Math.pos(arr[i], 4));
            console.log(arr[i] ** 4);

        }
    }
}
task4_3('number')

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
// "Index: 0, Number: 2"
// "Index: 1, Number: 3"
// "Index: 2, Number: 5"
// Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
// Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obulys is between -5564 and -51 in the array"



console.groupEnd('task4')




// /////////////////////////////////////////////////////////////////////////////////

console.group('task5')


// 5. Atlikti tatį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
// 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
//   <ul id="task-41"></ul>
//   <ul id="task-42"></ul>
//   <ul id="task-43"></ul>
//   Ir t.t.
// 5.2. JavaScript'e paselektinti šiuos elementus.
// 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
// 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.


console.groupEnd('task5')


