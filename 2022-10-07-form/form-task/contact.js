
let studentForm = document.querySelector('#student-form');
let studentList = document.querySelector('.student-list');


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


    let interests = document.querySelectorAll('[name="interest"]:checked');

    interests.forEach(interes => {
        console.log(interes.value);
    })

    let studentItem = document.createElement('div');
    studentItem.classList = 'student-item';

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Name: ${name}`

    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `Surname: ${surname}`

    let ageElement = document.createElement('p');
    ageElement.innerHTML = `Age: ${age}`

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `Email: <span class="hidden-area">****</span>`;

    let phoneElement = document.createElement('p');
    phoneElement.innerHTML = `Phone: <span class="hidden-area">****</span>`

    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `IT Knowledge: ${itKnowledge}`

    let groupElement = document.createElement('p');
    groupElement.innerHTML = `Group: ${group}`

    let interestWrapperElement = document.createElement('div');
    interestWrapperElement.classList.add('interest-wrapper')


    let studentDeleteButton = document.createElement('button');
    studentDeleteButton.textContent = 'Delete student';
    studentDeleteButton.classList.add('button', 'delete-button');

    studentDeleteButton.addEventListener('click', () => {
        studentItem.remove();
    })


    let privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Show personal info';
    privateInfoButton.classList.add('button', 'private-info-button');


    privateInfoButton.addEventListener('click', () => {
        let privateEmail = emailElement.querySelector('.hidden-area');
        privateEmail.textContent =  email;
    })


    studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement, privateInfoButton, studentDeleteButton)

    studentList.prepend(studentItem);




    // event.targer.reset();
})

