const users = [
    {
        userName: 'user01',
        userPassword: 'password0001',
    },
    {
        userName: 'user02',
        userPassword: 'password0002',
    },
    {
        userName: 'user03',
        userPassword: 'password0003',
    },
    {
        userName: 'user04',
        userPassword: 'password0004',
    },
    {
        userName: 'user05',
        userPassword: 'password0005',
    },
    {
        userName: 'aa',
        userPassword: 'aaa',
    },
]

let loginForm = document.querySelector('#login-form');
let userAccept = document.querySelector('#user-accept');
let nameInput = document.querySelector('#user-name');
let passwordInput = document.querySelector('#user-password');
let submitButton = document.querySelector('#submit-button');
let loginAnswer = document.querySelector('#login-answer');



userAccept.addEventListener('change', () => {
    toggleLoginButton()
})
nameInput.addEventListener('input', () => {
    toggleLoginButton()
})
passwordInput.addEventListener('input', () => {
    toggleLoginButton()
})

function toggleLoginButton() {
    if (userAccept.checked && nameInput.value.length > 1 && passwordInput.value.length > 2) {
        submitButton.classList.remove('button-disabled');
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.classList.add('button-disabled');
        submitButton.setAttribute('disabled', true);
    }
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginAnswer.textContent = '';

    let name = event.target.elements.name.value;
    let password = event.target.elements.password.value;

    let existUser = users.filter((user) => {
        return user.userName === name && user.userPassword === password;
    })
    if (existUser.length > 0) {
        renderLoggedInView()

        localStorage.setItem('isLoggedIn', true)

    } else {
        let failLogin = document.createElement('h3');
        failLogin.textContent = `User name or password incorrect`;
        loginAnswer.append(failLogin);
        event.target.elements.password.value = '';
    }

    if (localStorage.getItem('logined') === 'true') {
        localStorage.removeItem('user-password');
        localStorage.removeItem('user-name');
    }
})

function inputLocalStorage(input) {
    let localStorageValue = localStorage.getItem(input.id)
    if (input.type === 'checkbox') {

        let isChecked = localStorageValue === 'true';
        input.checked = isChecked;

        input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.checked)
        })
    } else {
        input.value = localStorageValue
        input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.value)
        })
    }
}

inputLocalStorage(nameInput)
inputLocalStorage(passwordInput)
inputLocalStorage(userAccept)

toggleLoginButton()

function checkIfLoggedIn() {
    let isLoggedIn = localStorage.getItem('isLoggedIn', true)
    localStorage.removeItem('user-name')
    localStorage.removeItem('user-password')
    localStorage.removeItem('user-accept')
    
    if (isLoggedIn === 'true') {
        renderLoggedInView()
    }
}

checkIfLoggedIn()


function renderLoggedInView() {
    loginForm.remove();
    let succsesLogin = document.createElement('h1');
    succsesLogin.textContent = `You are successfully logged in!`;
    loginAnswer.append(succsesLogin);
}