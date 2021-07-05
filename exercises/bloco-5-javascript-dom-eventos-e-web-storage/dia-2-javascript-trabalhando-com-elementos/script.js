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

let p = document.createElement('p');
p.innerText ='Algum texto';
divTwo.appendChild(p);

let divThree = document.createElement('div');
divThree.className = 'left-content';
divOne.appendChild(divThree)

let divFour = document.createElement('div');
divFour.className = 'right-content';
divOne.appendChild(divFour)

