const raffle = (number, result) => {
	const random = Math.floor(Math.random() * 5) + 1;
	result(number, random);
}

const result = (n1, n2) => {
	if(n1 === n2){
		console.log(`Parabéns você ganhou. Número sorteado ${n2}`); 
	}else{
		console.log(`Tente novamente! Número sorteado: ${n2}. Seu número: ${n1}`);
	}
}
for (let index = 0; index < 20; index += 1) {
	raffle(3, result);
}
