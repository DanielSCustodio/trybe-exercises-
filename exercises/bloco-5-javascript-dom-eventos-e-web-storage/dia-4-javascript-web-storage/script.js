function createBoxBg() {
	let color = ['colorRed', 'colorGreen', 'colorBlue'];
	for (let index = 0; index < color.length; index += 1) {
		let div = document.createElement('div');
		let className = color[index];
		div.className = className + ' box';
		//++++++++++++++++++++++++
		let divBg = document.getElementById('color-Backgroubd');
		divBg.appendChild(div);
	}
}



function selectBackground() {
	let body = document.querySelector('body');
	let div = document.getElementById('color-Backgroubd');
	div.addEventListener('click', mudaCor);

	function mudaCor(element) {
		let getClass = element.target.className;
		if(getClass === 'colorRed box'){
			body.style.background ='red';
		}
		if(getClass === 'colorGreen box'){
			body.style.background ='green';
		}
		if(getClass === 'colorBlue box'){
			body.style.background ='blue';
		}
	}
}


createBoxBg();

selectBackground();