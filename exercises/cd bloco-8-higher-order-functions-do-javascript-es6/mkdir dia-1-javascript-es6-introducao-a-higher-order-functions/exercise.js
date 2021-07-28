const newEmployees = (newFunction) => {
	const employees = {
		id1: newFunction('Pedro Geurra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
		id2: newFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
		id3: newFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
	}
	return employees;
};

function newFunction (nome){

	return {nome, email: `${nome.replace(' ','_')}.@trybe.com`}
	
}

console.log(newEmployees(newFunction));