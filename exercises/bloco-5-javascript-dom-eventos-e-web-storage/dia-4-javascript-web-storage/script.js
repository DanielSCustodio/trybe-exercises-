function createBox(){
	let color = ['colorRed','colorGreen','colorBlue'];
	for (let index = 0; index < color.length; index +=1) {
		let div = document.createElement('div');
		let className = color[index];
		div.className = className + ' box';
		//++++++++++++++++++++++++
		let divBg = document.getElementById('color-Backgroubd');
		divBg.appendChild(div);
	}
}

function selectBackground(){
	let body = document.querySelector('body');
}

createBox();
selectBackground();