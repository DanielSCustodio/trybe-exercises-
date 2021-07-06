let body = document.querySelector('body');
let tag = document.createElement('h1');
tag.className='title';
tag.innerText = 'Exercício 5.2 - JavaScript';
body.appendChild(tag);

let div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div);

let divOne = document.querySelector('.main-content');
let divTwo = document.createElement('div');
divTwo.className = 'center-content';
divOne.appendChild(divTwo);

let p = document.createElement('p');
p.innerText = 'Algum texto';
divTwo.appendChild(p);

let divThree = document.createElement('div');
divThree.className = 'left-content';
divOne.appendChild(divThree)

let divFour = document.createElement('div');
divFour.className = 'right-content';
divOne.appendChild(divFour)

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
divThree.appendChild(img);

let listItens =['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
let ul = document.createElement('ul');
for (let i = 0; i < listItens.length; i += 1) {
	let item = listItens[i];
	li = document.createElement('li');
	li.innerText=item;
	ul.appendChild(li);
}
divFour.appendChild(ul);

for (let index = 0; index < 3; index +=1 ) {
	let h3 = document.createElement('h3');
	div.appendChild(h3)
	h3.className ='description';
}

