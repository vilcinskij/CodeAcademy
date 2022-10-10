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
let studentList = document.querySelector('.studen-list');


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
    // let group = document.querySelector('[name="group"]:checked');
    let group = elements.group.value;

    let studentItem = document.createElement('div');
    studentItem.classList = 'student-item';

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Name: ${name}`

    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `Surname: ${surname}`

    let ageElement = document.createElement('p');
    ageElement.innerHTML = `Age: ${age}`

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `Email: ${email}`

    let phoneElement = document.createElement('p');
    phoneElement.innerHTML = `Phone: ${phone}`

    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `IT Knowledge: ${itKnowledge}`

    let groupElement = document.createElement('p');
    groupElement.innerHTML = `Group: ${group}`


    studentList.prepend(studentItem);

    studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement)





    // event.targer.reset();
})

{/* <div class="studen-list">
<div class="student-item">
    <p>Name: John</p>
    <p>Surname: John</p>
    <p>DOB: John</p>
    <p>Phone Nr.: John</p>
    <p>Email.: John</p>
    <p>IT knowledge: John</p>
    <p>Group: John</p>
</div>
</div> */}