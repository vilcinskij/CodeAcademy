// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   let name = document.querySelector('#name').value;
//   let age = document.querySelector('input[name=age]');

//   console.dir(name);
// });


// let studentForm = document.getElementById('student-form');
let studentForm = document.querySelector('#student-form');
let studentsList = document.querySelector('#students-list');

function changeRangeOutput() {
  let itKnowledgeInput = document.querySelector('#student-it-knowledge');
  let itKnowledgeOutput = document.querySelector('#it-knowledge-output');
  
  itKnowledgeInput.addEventListener('input', () => {
    itKnowledgeOutput.textContent = itKnowledgeInput.value;
  });
}

changeRangeOutput();

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
  // // let email = event.target.elements['student-email'].value;
  // let email = event.target.elements.email.value;

  let elements = event.target.elements;

  let name = elements.name.value;
  let surname = elements.surname.value;
  let age = elements.age.value;
  let phone = elements.phone.value;
  // let email = elements['student-email'].value;
  let email = elements.email.value;
  let itKnowledge = elements['it-knowledge'].value;
  // let group = document.querySelector('[name="group"]:checked');
  let group = elements.group.value;
  let interests = document.querySelectorAll('[name="interest"]:checked');

  let inputErrorMessages = event.target.querySelectorAll('.input-error-message');
  inputErrorMessages.forEach(message => message.remove());

  let requiredInputs = event.target.querySelectorAll('.required');
  let formIsValid = true;

  requiredInputs.forEach(input => {
    input.classList.remove('input-error');

    if (!input.value) {
      formIsValid = false;
      checkInputData(input, 'This field is required.');
    } else if (input.name === 'name') {
      if (input.value.length < 3) {
        formIsValid = false;
        let errorText = 'Name is too short. At least 3 symbols is required.'
        checkInputData(input, errorText);
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Name is too short. At least 3 symbols is required.';
      }
    } else if (input.name === 'surname') {
      if (input.value.length < 3) {
        formIsValid = false;
        checkInputData(input, 'Surname is too short. At least 3 symbols is required.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Surname is too short. At least 3 symbols is required.';
      }
    } else if (input.name === 'phone') {
      if (input.value.length < 9 || input.value.length > 12) {
        formIsValid = false;
        checkInputData(input, 'Phone number is invalid.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Phone number is invalid.';
      }
    } else if (input.name === 'age') {
      if (input.value < 0) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be a negative number.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Age cannot be a negative number.';
      } else if (input.value > 120) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be more then 120 years.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Age cannot be more then 120 years.';

      }
    } else if (input.name === 'email') {
      if (input.value.length < 9 || !input.value.includes('@') || !input.value.includes('.')) {
        formIsValid = false;
        checkInputData(input, 'Email is incorrect.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Email is incorrect.';
      }
    }
  });

  if (!formIsValid) {
    let errorMessage = 'Some fields are missing...';
    renderAlertMessage(errorMessage, 'color-red');
    return;
  }

  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  let nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${name}`;

  let surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${surname}`;

  let ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${age}`;

  let emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;

  let phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;

  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> ${itKnowledge}`;

  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${group}`;

  let interestWrapperElement = document.createElement('div');
  interestWrapperElement.classList.add('interest-wrapper');

  let interestTitleElement = document.createElement('h3');
  interestTitleElement.textContent = 'Interests:';

  let interestListElement = document.createElement('ul');

  interests.forEach(interest => {
    let interestItem = document.createElement('li');
    interestItem.textContent = interest.value;
    interestListElement.append(interestItem);
  });

  interestWrapperElement.append(interestTitleElement, interestListElement);

  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show personal info';
  privateInfoButton.classList.add('private-info-button', 'show');

  // privateInfoButton.addEventListener('click', () => {
  //   let privateEmail = emailElement.querySelector('.hidden-area');
  //   let privatePhone = phoneElement.querySelector('.hidden-area');

  //   if (privateInfoButton.classList.contains('show')) {
  //     privateEmail.textContent = email;
  //     privatePhone.textContent = phone;
  //     privateInfoButton.textContent = 'Hide personal info';
  //   } else {
  //     privateEmail.textContent = '****';
  //     privatePhone.textContent = '****';
  //     privateInfoButton.textContent = 'Show personal info';
  //   }

  //   privateInfoButton.classList.toggle('show');
  // });

  let dataHidden = true;

  privateInfoButton.addEventListener('click', () => {
    let privateEmail = emailElement.querySelector('.hidden-area');
    let privatePhone = phoneElement.querySelector('.hidden-area');

    if (dataHidden) {
      privateEmail.textContent = email;
      privatePhone.textContent = phone;
      privateInfoButton.textContent = 'Hide personal info';
    } else {
      privateEmail.textContent = '****';
      privatePhone.textContent = '****';
      privateInfoButton.textContent = 'Show personal info';
    }
    
    dataHidden = !dataHidden;
  });

  let removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();
    let removedStudentText = `Student (${name} ${surname}) successfully removed.`;
    renderAlertMessage(removedStudentText);
  });

  studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, removeStudentButton);
  studentsList.prepend(studentItem);

  let createdStudentText = `Student created (${name} ${surname})`;
  renderAlertMessage(createdStudentText);

  // 3. Kontaktų forma turi išsivalyti.
  event.target.reset();
  localStorage.clear();
});

function renderAlertMessage(text, elementClass) {
  let alertMessage = document.querySelector('#alert-message');
  alertMessage.textContent = text;

  if (elementClass) {
    alertMessage.classList.add(elementClass);
  }

  setTimeout(() => {
    alertMessage.textContent = '';
    alertMessage.classList.remove(elementClass);
  }, 5000);
}

function checkInputData(input, text) {
  let inputErrorMessage = document.createElement('span');
  inputErrorMessage.classList.add('input-error-message', 'color-red');
  input.classList.add('input-error');
  input.after(inputErrorMessage);
  inputErrorMessage.textContent = text;
}

let nameInput = document.getElementById('student-name');
let surnameInput = document.getElementById('student-surname');
let ageInput = document.getElementById('student-age');
let phoneInput = document.getElementById('student-phone');
let emailInput = document.getElementById('student-email');
let itKnowledgeInput = document.getElementById('student-it-knowledge');

// nameInput.value = localStorage.getItem('student-name');
// surnameInput.value = localStorage.getItem('student-surname');
// ageInput.value = localStorage.getItem('student-age');
// phoneInput.value = localStorage.getItem('student-phone');
// emailInput.value = localStorage.getItem('student-email');
// itKnowledgeInput.value = localStorage.getItem('student-it-knowledge');

// nameInput.addEventListener('input', () => {
//   localStorage.setItem('student-name', nameInput.value);
// });

// surnameInput.addEventListener('input', () => {
//   localStorage.setItem('student-surname', surnameInput.value);
// })

// ageInput.addEventListener('input', () => {
//   // localStorage.setItem(ageInput.id, ageInput.value);

//   let storageKey = ageInput.id;
//   let storageValue = ageInput.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// phoneInput.addEventListener('input', () => {
//   let storageKey = phoneInput.id;
//   let storageValue = phoneInput.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// emailInput.addEventListener('input', (event) => {
//   let storageKey = event.target.id;
//   let storageValue = event.target.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// itKnowledgeInput.addEventListener('input', (event) => {
//   let storageKey = event.target.id;
//   let storageValue = event.target.value;
//   localStorage.setItem(storageKey, storageValue);
// });

function populateSimpleInput(input) {
  let oldStorageValue = localStorage.getItem(input.id);
  if (oldStorageValue !== null) {
    input.value = oldStorageValue;
  }

  input.addEventListener('input', (event) => {
    let storageKey = event.target.id;
    let storageValue = event.target.value;
    localStorage.setItem(storageKey, storageValue);
  });
}

populateSimpleInput(nameInput);
populateSimpleInput(surnameInput);
populateSimpleInput(ageInput);
populateSimpleInput(phoneInput);
populateSimpleInput(emailInput);
populateSimpleInput(itKnowledgeInput);