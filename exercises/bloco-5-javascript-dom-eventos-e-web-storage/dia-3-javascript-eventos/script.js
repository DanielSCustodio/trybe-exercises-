const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDate(arrayDay){
	ul = document.getElementById('days');
	for (let index = 0; index < arrayDay.length; index += 1) {
		let li = document.createElement('li');
		li.innerText = arrayDay[index];
		li.className = 'day';
		if (arrayDay[index]===24| arrayDay[index]===25| arrayDay[index]===31) {
			li.className = 'holiday';
		}
		if (arrayDay[index]===4| arrayDay[index]===11| arrayDay[index]===18 | arrayDay[index]===25) {
			li.className = 'friday';
		}
		ul.appendChild(li);
	}
}

function holiday(buttonName){
	let btnHoliday = document.createElement("button");
	let nomeId = 'btn-holiday';
	btnHoliday.innerHTML = buttonName;      //recebendo o texto que está como parametro na função, será o texto do botão   
	btnHoliday.id = nomeId;
	
	let divButtons = document.querySelector('.buttons-container');
	divButtons.appendChild(btnHoliday);

}

function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();
createDate(dezDaysList);
holiday('Feriados');
  // Escreva seu código abaixo.