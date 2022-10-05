// UŽDUOTIS (reduce):
// 1. Sukurti 10-ies skaičių masyvą.

let nums = [5, 8, 7, -6, -8, 10, 25, 6555, -95, 0, 13, -50, 12, 8, -100, 16, 17, -18, -1999, 200]

// console.log('-------------------TASK_2------------------');


// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"

function task2(numbers) {

    let numbersArrayToString = numbers.reduce((previous, current) => previous + ', ' + current);
    let arraySum = numbers.reduce((sum, currentNumber) => sum + currentNumber);
    let average = arraySum / numbers.length;

    let output = `Skaičių (${numbersArrayToString}) vidurkis yra ${average}`

    let task1Element = document.querySelector('#task2')
    task1Element.textContent = output
}
task2(nums)

console.log('-------------------TASK_3------------------');


// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"



function task3(numbers) {

    let sortedArray = numbers.slice().sort((a, b) => a - b);
    let numbersInArray = sortedArray.length;
    let median;


    if (numbersInArray % 2 === 0) {
        let middleTopIndex = numbersInArray / 2;
        let middleTopNumber = numbers[middleTopIndex];
        let middleBottomIndex = middleTopIndex - 1;
        let middleBottomNumber = numbers[middleBottomIndex];
        median = (middleTopNumber + middleBottomNumber) / 2
      } else {
        let middleIndex = Math.floor(numbersInArray / 2);
        median = numbers[middleIndex];
      }

      let output = `Skaičių (${sortedArray}) mediana yra ${median}.`;
      let task1Element = document.querySelector('#task3');
      task1Element.textContent = output;

}
task3(nums)

// console.log('-------------------TASK_4------------------');
// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"


function task4(numbers) {

    let max = Math.max(...numbers);

    let numbersArrayToString = numbers.reduce((c, p) => c + `, ` + p);

    let output = `Skaičių (${numbersArrayToString}) didžiausias skaičius yra ${max}`

    let task4Elekent = document.querySelector('#task4')
    task4Elekent.textContent = output
}
task4(nums)

// console.log('-------------------TASK_5------------------');


// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"

function task5(numbers) {

    let min = Math.min(...numbers);

    let numbersArrayToString = numbers.reduce((p, c) => p + `, ` + c);

    let output = `Skaičių (${numbersArrayToString}) mažiausias skaičius yra ${min}`

    let task4Elekent = document.querySelector('#task5')
    task4Elekent.textContent = output
}
task5(nums)




// console.log('-------------------TASK_6------------------');


// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"

function task6(numbers, nth) {
    // let sortedNumbers = numbers.sort((a, b) => a - b);
    // let numbersArrayToString = numbers.reduce((previous, current) => previous + ', ' + current);
    let numbersArrayToString = arrayToString(numbers);
    let index = nth - 1;
    let nthNumber = numbers[index];
    let output = `Skaičių (${numbersArrayToString}) ${nth} skaičius pagal dydį yra ${nthNumber}.`;
    document.querySelector('#task6').textContent = output;
  }
  task6(nums, 5);

  function arrayToString(arr) {
    // return arr.sort((a, b) => a - b).join(', ');
    return arr.sort((a, b) => a - b).reduce((previous, current) => previous + ', ' + current);
  }