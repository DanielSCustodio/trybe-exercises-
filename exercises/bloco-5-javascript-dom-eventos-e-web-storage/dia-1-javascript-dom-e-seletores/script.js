/*
				Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
				- document.getElementById()
				- document.getElementsByClassName()
				- document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
				*/


function mudaP() {
	let mudaTag = document.getElementsByTagName('p');

	for (let index = 0; index < mudaTag.length; index +=1) {
		mudaTag[index].innerText='Qualquer coisa';
		mudaTag[index].style.textTransform="uppercase";
	}

}

function mudaCor() {
	document.getElementById('main-content').style.background="#4ca46d";
}

function mudaColor() {
	document.querySelector('.center-content').style.background="white";
}

function corrigeH1() {
	document.getElementsByTagName('h1')[0].innerText="Exercício 5.1 - JavaEscripit"
}

function mostraP() {
	let mudaTag = document.getElementsByTagName('p');
	for (let index = 0; index < mudaTag.length; index +=1) {
	let result = mudaTag[index].innerText;
	console.log(result);
	}
}

mostraP();
corrigeH1();
mudaCor();
mudaP();
mudaColor();