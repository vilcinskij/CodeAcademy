let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');

h1.addEventListener('click', () => {
    h1.style.color = 'green';
    h1.style.backgroundColor = 'pink';
});

h2.addEventListener('click', () => {
    h2.style.fontSize = '50px';
});

h3.addEventListener('click', () => {
    h3.style.color = 'purple';
    h1.style.color = 'purple';
});