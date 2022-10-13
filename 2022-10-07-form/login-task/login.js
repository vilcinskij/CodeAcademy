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
]

let loginForm = document.querySelector('#login-form');

let userAccept = document.querySelector('#user-accept');
let nameInput = document.querySelector('#user-name');
let passwordIput = document.querySelector('#user-password');

let submitButton = document.querySelector('#submit-button');

let loginAnswer = document.querySelector('#login-answer');


userAccept.addEventListener('change', () => {
    toggleLoginButton()
})

nameInput.addEventListener('input', ()=>{
    toggleLoginButton()
})

passwordIput.addEventListener('input', ()=>{
    toggleLoginButton()
})

function toggleLoginButton() {
    if (userAccept.checked && nameInput.value.length > 5 && passwordIput.value.length > 11) {
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
        loginForm.remove();
        let succsesLogin = document.createElement('h1');
        succsesLogin.textContent = `You are successfully logged in!`;
        loginAnswer.append(succsesLogin);
    } else {
        let failLogin = document.createElement('h3');
        failLogin.textContent = `User name or password incorrect`;
        loginAnswer.append(failLogin);
        event.target.elements.password.value = '';
    }

    console.log(nameInput.value.length);

})

