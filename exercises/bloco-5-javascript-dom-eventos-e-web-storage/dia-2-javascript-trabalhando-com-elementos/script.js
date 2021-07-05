let body = document.querySelector('body');
let tag = document.createElement('h1');
tag.innerText='Exercício 5.2 - JavaScript';
body.appendChild(tag);

let div = document.createElement('div');
div.className= 'main-content';
body.appendChild(div);

let divOne = document.querySelector('.main-content');
let divTwo = document.createElement('div');
divTwo.className='center-content';
divOne.appendChild(divTwo);
