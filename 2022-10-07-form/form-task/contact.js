// PIRMA DALIS:
// Sukurti kontaktų formą.
// 1. Kontaktų formoje turi būti šie laukeliai:
//     1. Tekstinis laukelis vardui (privalomas).
//     2. Tekstinis laukelis pavardei (privalomas).
//     3. Skaičiaus laukelis amžiui (privalomas).
//     4. Laukelis įvesti telefono numerį (neprivalomas).
//     5. Laukelis įvesti el. paštą (privalomas).
//     6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
//     7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo FEU 1gr. iki FEU 5gr.

// Ją pridavus (submit):
// 2. Žemiau kontaktų formos turi būtų atvaizduoti visi duomenys, pvz. „Amžius: 25m.".
// 3. Kontaktų forma turi išsivalyti.

// 4. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.


let studentForm = document.querySelector('#student-form');


studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // let name = document.querySelector('#student-name').value;
    // let surname = document.getElementById('student-surname').value;
    // let age = document.querySelector('[name="age"]').value;
    // let phone = document.getElementsByName('phone')[0].value;
    // let email = studentForm.querySelector('#student-email').value;


    // let name = event.target.elements.name.value;
    // let surname = event.target.elements.surname.value;
    // let age = event.target.elements.age.value;
    // let phone = event.target.elements.phone.value;
    // let email = event.target.elements['student-email'].value;
    

    let elements = event.target.elements
    let name = elements.name.value;
    let surname = elements.surname.value;
    let age = elements.age.value;
    let phone = elements.phone.value;
    let email = elements['student-email'].value;
    let itKnowledge = elements['it-knowledge'].value;

    
    console.log(name, surname, age, phone, email);


    let output = `Vardas: ${name}, pavardė: ${surname}, amžius: ${age}, tel. nr.: ${phone}, el. paštas: ${email}, ${itKnowledge}`

    console.dir(output);

    document.querySelector('p').textContent = output;

    // event.targer.reset();
})

// let nameInput = document.createElement('input');
// let surnameInput = document.createElement('input');
// let ageInput = document.createElement('input');
// let phoneInput = document.createElement('input');
// let emailInput = document.createElement('input');
// let itKnowledgeInput = document.createElement('input');
// let groupInput = document.createElement('input');
// let submitButton = document.createElement('input');


// nameInput.type = 'text';
// nameInput.id = 'name';
// surnameInput.type = 'text';
// ageInput.type = 'date';
// phoneInput.type = 'number';
// emailInput.type = 'email';
// itKnowledgeInput.type = 'range';
// groupInput.type = 'radio';
// submitButton.type = 'submit';



// studentForm.append(nameInput, surnameInput, ageInput, phoneInput, emailInput, itKnowledgeInput, groupInput, submitButton);
