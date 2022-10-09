let formAge = document.querySelector('form');

formAge.addEventListener('submit', (event)=>{
    event.preventDefault();

    let age = document.querySelector('input[name=age]').value;
    console.log(age);
})
