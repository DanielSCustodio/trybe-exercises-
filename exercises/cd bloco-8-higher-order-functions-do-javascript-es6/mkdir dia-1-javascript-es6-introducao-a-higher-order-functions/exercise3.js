const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (template, answers) => {
	const result = punctuation(template, answers);
	console.log(`Pontuação final: ${result}`)
}

const punctuation = (arrayOne, arrayTwo) => {
	let correct = 0;
	for (let index = 0; index <arrayTwo.length; index +=1) {
		if(arrayOne[index] === arrayTwo[index]){
			correct += 1;
		}else if(arrayTwo[index] === 'N.A'){
			correct += 0;
		} else{
			correct -= 0.5;
		}
	}
	return correct;
}
checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);