let numbers = document.querySelector('#numbers');

let h3element = document.createElement('h3');
h3element.textContent = 0;

let buttonPlus = document.createElement('button');
buttonPlus.textContent = '+';

let buttonMinus = document.createElement('button');
buttonMinus.textContent = '-';

numbers.append(h3element, buttonPlus, buttonMinus);

buttonPlus.addEventListener('click', () => {
    h3element.textContent ++
});

buttonMinus.addEventListener('click', () => {
    h3element.textContent --
});










// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „0"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti