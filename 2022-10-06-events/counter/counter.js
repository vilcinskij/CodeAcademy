// 1. Sukurti HTML elementą, kurio id „numbers"

let numbers = document.querySelector('#numbers');


// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
let h3element = document.createElement('h3');


// 3. h3 elemento tekstas turėtų būti „5"
let h3elementDefault = 5
h3element.textContent = h3elementDefault;


// 4. Mygtukų tekstas turėtų būti „+" ir „-"
let buttonPlus = document.createElement('button');
buttonPlus.textContent = '+';
buttonPlus.classList.add('button-plus');

let buttonMinus = document.createElement('button');
buttonMinus.textContent = '-';
buttonMinus.classList.add('button-minus');

numbers.append(h3element, buttonMinus, buttonPlus);


// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
buttonPlus.addEventListener('click', () => {
    h3element.textContent++;
    buttonMinus.removeAttribute('disabled');


    // 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
    if (h3element.textContent >= 10) {
        buttonPlus.setAttribute('disabled', true);
    }

    if (h3element.textContent >= 5) {
        h3element.style.color = 'green';
    } else {
        h3element.style.color = 'red';
    }

});

buttonMinus.addEventListener('click', () => {
    h3element.textContent--;
    buttonPlus.removeAttribute('disabled');


    if (h3element.textContent < 2) {
        buttonMinus.setAttribute('disabled', true);
    }

    if (h3element.textContent >= 5) {
        h3element.style.color = 'green';
    } else {
        h3element.style.color = 'red';
    }

});


// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
let resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
resetButton.style.display = 'block';

resetButton.addEventListener('click', () => {
    h3element.textContent = h3elementDefault;
    h3element.style.color = 'green';
    buttonMinus.removeAttribute('disabled');
    buttonPlus.removeAttribute('disabled');
})

numbers.append(resetButton);







// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

