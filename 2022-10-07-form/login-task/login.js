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

    let elements = event.target.elements;
    let name = elements.name.value;
    let password = elements.password.value;

    let existUser = users.filter((user) => {
        userName === name;
    })
})