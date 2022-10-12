const users = [
    {
        userName: 'user1',
        userPassword: 'password1',
    },
    {
        userName: 'user2',
        userPassword: 'password2',
    },
    {
        userName: 'user3',
        userPassword: 'password3',
    },
    {
        userName: 'user4',
        userPassword: 'password4',
    },
    {
        userName: 'user5',
        userPassword: 'password5',
    },
]


let loginForm = document.querySelector('#login-form');
let userAccess = document.querySelector('#user-accept');
let submitButton = document.querySelector('#submit-button');
let loginAnswer = document.querySelector('#login-answer');
let loginLength = document.querySelector('#user-name');
let passwordLength = document.querySelector('#user-password');

// console.log(loginLenght.value.length);

loginLength.addEventListener('change', () => {
    if (loginLength.value.length > 3) {
        console.log('ilgas');
    }
})


userAccess.addEventListener('change', () => {
    if (userAccess.checked) {
        submitButton.classList.remove('button-disabled');
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.classList.add('button-disabled');
        submitButton.setAttribute('disabled', true);
    }
})





loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginAnswer.textContent = '';

    let name = event.target.elements.name.value;
    let password = event.target.elements.password.value;

    let existUser = users.filter((user) => {
        return user.userName === name && user.userPassword === password;
    })
    if (existUser.length > 0) {
        let succsesLogin = document.createElement('h1');
        succsesLogin.textContent = `You are successfully logged in!`;
        loginAnswer.append(succsesLogin);
    } else {
        let failLogin = document.createElement('h3');
        failLogin.textContent = `User name or password incorrect`;
        loginAnswer.append(failLogin);
        event.target.elements.password.value = '';
    }
    console.log(loginLength.value.length);
})

