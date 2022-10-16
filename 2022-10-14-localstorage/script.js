console.log(localStorage);

// Sukurti localStorage narį

localStorage.setItem('testStorage', 'Labas');

//Redaguoti LocalStorage narį

localStorage.setItem('testStorage', 'Babas-labas');

// Gauti LocalStorage

let testStorage = localStorage.getItem('testStorage');
console.log(testStorage);

//Ištrinti LocalStorage narį
localStorage.removeItem('testStorage');

console.log(localStorage.getItem('testStorage'));



let button = document.querySelector('button');
let span = document.querySelector('span')

button.addEventListener('click', () => {
    let counter = localStorage.getItem('counter');
    let updatedCounter = Number(counter) + 1
    span.textContent = counter

    localStorage.setItem('counter', updatedCounter);

})


let input = document.querySelector('input');
input.value = localStorage.getItem('inputStorageValue');
input.addEventListener('input', () => {
  console.log(input.value);
  localStorage.setItem('inputStorageValue', input.value);
})