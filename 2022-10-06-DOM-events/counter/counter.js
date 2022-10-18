
let numbers = document.querySelector('#numbers');

let h3element = document.createElement('h3');
let h4Element = document.createElement('h4');
let gradesList = document.createElement('ul');

let buttonPlus = document.createElement('button');
let buttonMinus = document.createElement('button');
let resetButton = document.createElement('button');
let plus2Button = document.createElement('button');
let minus2Button = document.createElement('button');
let saveGrade = document.createElement('button');
let resetAllGradesButton = document.createElement('button');

let gradeInput = document.createElement('input');

gradeInput.type = 'number';
gradeInput.max = '10';
gradeInput.min = '1';
gradeInput.value = '8';


let h3elementDefault = 5
h3element.textContent = h3elementDefault;


buttonPlus.textContent = '+';
buttonMinus.textContent = '-';
resetButton.textContent = 'RESET';
plus2Button.textContent = '+2';
minus2Button.textContent = '-2';
h4Element.textContent = 'Balai:';
saveGrade.textContent = 'Įrašyti balą';
resetAllGradesButton.textContent = 'Pašalinti įrašus'

numbers.append(gradeInput, h3element, minus2Button, buttonMinus, buttonPlus, plus2Button, resetButton, saveGrade, resetAllGradesButton, h4Element,
    gradesList);

buttonPlus.addEventListener('click', () => {
    h3element.textContent++;
    buttonMinus.removeAttribute('disabled');
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

resetButton.addEventListener('click', () => {
    h3element.textContent = h3elementDefault;
    h3element.style.color = 'green';
    buttonMinus.removeAttribute('disabled');
    buttonPlus.removeAttribute('disabled');
})

minus2Button.addEventListener('click', () => {
    h3element.textContent -= 2;
    buttonPlus.removeAttribute('disabled');
    if (h3element.textContent < 2) {
        minus2Button.setAttribute('disabled', true);
    }
    if (h3element.textContent >= 5) {
        h3element.style.color = 'green';
    } else {
        h3element.style.color = 'red';
    }
});

saveGrade.addEventListener('click', () => {
    let gradesListElemet = document.createElement('li');
    gradesListElemet.textContent = h3element.textContent;
    gradesList.prepend(gradesListElemet);

    gradesListElemet.addEventListener('click', () => {
        gradesListElemet.remove()
    })
})


// buttonPlus.classList.add('button-plus');
// buttonMinus.classList.add('button-minus');


// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį append'inti prie ul elemento.
// 14.3. Nuresetinti skaičiuoklę.