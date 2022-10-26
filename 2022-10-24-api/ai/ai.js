const nameForm = document.querySelector('#name-form');

nameForm.addEventListener('submit', event => {
    event.preventDefault();
    let inputValue = event.target.elements.name.value;
    let outputText = '';

    console.log(inputValue);

    fetch(`https://api.agify.io?name=${inputValue}`)
    .then(res => res.json())
    .then(data => {
        let apiTextOutput = `${inputValue} is ${data.age} years old`
        outputText += apiTextOutput
        console.log(outputText);
    })

})