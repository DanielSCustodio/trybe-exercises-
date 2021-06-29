// function verificaPalindrome(string) {
// 	let reversed = string.split("").reverse().join(""); //split tranforma em array, reverse inverte o array e join transforma em string novamente
// 		if (reversed === string) {
			
// 			console.log("true");
// 		}else{
// 			console.log("false");
// 		}
//  }
// verificaPalindrome("arara");

// let numeros = [2, 3, 6, 7, 10, 1];
// function maiorIndice(numbers){
// 	let maior = numbers[0];
// 	let indiceMaior;
// 	for (let index=0; index < numbers.length; index += 1){
// 	if (numbers[index] > maior) {
// 		maior = numbers[index];
// 		indiceMaior = index
// 	}
// }
// console.log(indiceMaior);
// }

// maiorIndice(numeros);

// let numeros= [2, 4, 6, 7, 10, 0, -3];
// function menorIndice(numbers){
// 	let menor = numbers[0];
// let indiceMenor;
// for (let index=0; index < numbers.length; index += 1){
// 	if (numbers[index] < menor) {
// 		menor = numbers[index];
// 		indiceMenor = index
// 	}
// }
// console.log(indiceMenor);
// }

// menorIndice(numeros);

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function maiorNome(nome){
// 	let maior = nome[0].length;
// let maiorNome;

// for (let index = 0; index < nome.length; index+=1) {
// 	if (nome[index].length > maior){
// 		maior = nome[index].length;
// 		maiorNome =  nome[index]
// 	}

// }
// console.log(maiorNome);
// }

// maiorNome(nomes);


// let n = [2, 3, 2, 5, 8, 2, 3];

// function numeroRepetido(numbers) {
// 	let igual =0;
// 	let numeroRepetido= 0;
// 	let indexGanhador =0;
// 	let vezesRepete =0;
// 	for (let index = 0; index < numbers.length; index+=1) {
// 		for (let i in numbers) {
// 			if (numbers[index] === numbers[i]) {
// 				igual +=1;
// 				vezesRepete = igual;
// 				}
// 			}	
// 			igual =0;
// 			if (vezesRepete > numeroRepetido) {
// 				indexGanhador = numbers[index];
// 				numeroRepetido = vezesRepete;
// 				vezesRepete =0;
			
// 			}
// 		}console.log(indexGanhador);
// }

// numeroRepetido(n);
	



	
	






