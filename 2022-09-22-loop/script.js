
// function task1() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i * 2);
//     }
// }

// function task2() {
//     for (let i=1; i<=100; i++) {
//         console.log(i * 5);
//     }
// }

// function task3() {
//     for (let i=1; i<=10; i++) {
//         console.log (i**i)
//     }
// }


// task3()


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.
// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.
// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.:
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.
// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų kiek kartų ciklas turi kartotis.
// 9.2. Nusakytų nuo kokio skaičiaus prasidės ciklas



// function task31(start, end) {
//     for (let i = start; i <= end; i++) {
//         let result = i * 2;
//         let output = `${i} * 2 = ${result}`
//         console.log(`${output}`);
//     }
// }
// // task31(25, 56)


// function task2 (start, count) {
//     for (let i = start; i <= end; i++) {
//         let result = i * 5;
//         let output = `${i} * 5 = ${result}`
//         console.log(`${output}`);
//     }

// }

// task2()

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`Fizz`)
        } else if (i % 5 === 0) {
            console.log(`Buzz`)
        } else {
            console.log(i)
        }
    }

}

// fizzBuzz()

function fizzBuzz2() {
    for (let i = 1; i <= 300; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            console.log(`FizzBuzzBiff`)
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`)
        } else if (i % 5 === 0 && i % 7 === 0) {
            console.log(`BuzzBiff`)
        } else if (i % 3 === 0 && i % 7 === 0) {
            console.log(`FizzBiff`)
        } else if (i % 3 === 0) {
            console.log(`Fizz`)
        } else if (i % 5 === 0) {
            console.log(`Buzz`)
        } else if (i % 7 === 0) {
            console.log(`Biff`)
        } else {
            console.log(i)
        }
    }

}

// fizzBuzz2()

function fizzBuzz3() {
    for (let i = 1; i <= 300; i++) {
        let output = '';

        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            output = 'FizzBuzzBiff'
        } else if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz'
        } else if (i % 5 === 0 && i % 7 === 0) {
            output = 'BuzzBiff'
        } else if (i % 3 === 0 && i % 7 === 0) {
            output = 'FizzBiff'
        } else if (i % 3 === 0) {
            output = 'Fizz'
        } else if (i % 5 === 0) {
            output = 'Buzz'
        } else if (i % 7 === 0) {
            output = 'Biff'
        } else {
            output = i;
        }

        console.log(output);
    }

}


// fizzBuzz3()

function fizzBuzz4() {
    for (let i = 1; i <= 300; i++) {
        let output = '';


        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'FizzBuzzBiffFuzz'


        } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
            output = 'FizzBuzzFuzz'
        } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'FizzBiffFuzz'
        } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'BuzzBiffFuzz'
        } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            output = 'FizzBuzzBiff'


        } else if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz'
        } else if (i % 5 === 0 && i % 7 === 0) {
            output = 'BuzzBiff'
        } else if (i % 3 === 0 && i % 9 === 0) {
            output = 'FizzBiff'
        } else if (i % 5 === 0 && i % 9 === 0) {
            output = 'FizzBiff'
        } else if (i % 7 === 0 && i % 9 === 0) {
            output = 'FizzBiff'


        } else if (i % 3 === 0) {
            output = 'Fizz'
        } else if (i % 5 === 0) {
            output = 'Buzz'
        } else if (i % 7 === 0) {
            output = 'Biff'
        } else if (i % 9 === 0) {
            output = 'Fuzz'
       

        } else {
            output = i;
        }

        console.log(output);
    }

}


// fizzBuzz4()



function fizzBuzz6 () {
    for (let i = 1; i <= 110; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'Fizz';
        }

        if (i % 5 === 0) {
            output += 'Buzz';
        }

        if (i % 5 === 0) {
            output += 'Biff';
        }

        if (!output) {
            output = i;
        }

        console.log(output);
    }
}

fizzBuzz6()