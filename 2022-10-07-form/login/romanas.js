const users = [
  {
    userName: 'john123',
    userPassword: '123456789',
  },
  {
    userName: 'doe777',
    userPassword: 'qwerty123',
  },
];

let loginForm = document.querySelector('#login-form');

let nameInput = document.querySelector('#user-name');
let passwordInput = document.querySelector('#user-password');
let userAccess = document.querySelector('#user-access');

let submitButton = document.querySelector('#submit-button');

userAccess.addEventListener('change', () => {
  // submitButton.toggleAttribute('disabled');

  // if (submitButton.hasAttribute('disabled')) {
  //   submitButton.removeAttribute('disabled');
  // } else {
  //   submitButton.setAttribute('disabled', true);
  // }

  toggleLoginButton();
})

nameInput.addEventListener('input', () => {
  toggleLoginButton();
});

passwordInput.addEventListener('input', () => {
  toggleLoginButton();
})

function toggleLoginButton() {
  if (userAccess.checked && nameInput.value.length > 4 && passwordInput.value.length > 5) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = event.target.elements.name.value;
  let password = event.target.elements.password.value;

  // let matchedUser = users.filter(user => {
  //   return user.userName === name && user.userPassword === password;
  // });

  let matchedUser = users.filter(user => user.userName === name && user.userPassword === password);

  if (matchedUser.length > 0) {
    event.target.remove();
    let greetingMessage = document.createElement('h1');
    greetingMessage.textContent = 'Sveikiname sėkmingai prisijungus';
    document.body.prepend(greetingMessage);
  } else {
    let loginErrorElement = document.querySelector('.login-error');
    if (loginErrorElement) {
      loginErrorElement.remove();
    }

    let errorElement = document.createElement('span');
    errorElement.classList.add('login-error');
    errorElement.textContent = 'Slaptažodis ir/arba prisijungimo vardas buvo neteisingas.';
    event.target.append(errorElement);
    event.target.elements.password.value = '';
  }
})