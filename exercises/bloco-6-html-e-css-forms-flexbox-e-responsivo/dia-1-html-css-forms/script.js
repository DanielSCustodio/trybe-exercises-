
const states = [                     //Fonte: https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5#gistcomment-3762697
	{ value: 'AC', label: 'Acre' },
	{ value: 'AL', label: 'Alagoas' },
	{ value: 'AP', label: 'Amapá' },
	{ value: 'AM', label: 'Amazonas' },
	{ value: 'BA', label: 'Bahia' },
	{ value: 'CE', label: 'Ceará' },
	{ value: 'DF', label: 'Distrito Federal' },
	{ value: 'ES', label: 'Espírito Santo' },
	{ value: 'GO', label: 'Goías' },
	{ value: 'MA', label: 'Maranhão' },
	{ value: 'MT', label: 'Mato Grosso' },
	{ value: 'MS', label: 'Mato Grosso do Sul' },
	{ value: 'MG', label: 'Minas Gerais' },
	{ value: 'PA', label: 'Pará' },
	{ value: 'PB', label: 'Paraíba' },
	{ value: 'PR', label: 'Paraná' },
	{ value: 'PE', label: 'Pernambuco' },
	{ value: 'PI', label: 'Piauí' },
	{ value: 'RJ', label: 'Rio de Janeiro' },
	{ value: 'RN', label: 'Rio Grande do Norte' },
	{ value: 'RS', label: 'Rio Grande do Sul' },
	{ value: 'RO', label: 'Rondônia' },
	{ value: 'RR', label: 'Roraíma' },
	{ value: 'SC', label: 'Santa Catarina' },
	{ value: 'SP', label: 'São Paulo' },
	{ value: 'SE', label: 'Sergipe' },
	{ value: 'TO', label: 'Tocantins' },
];
let select	= document.getElementById('estado');
let dia	= document.getElementById('dia');
let mes	= document.getElementById('mes');
let ano	= document.getElementById('ano');
let btnEnviar	= document.getElementById('btn-enviar');
let show	= document.getElementById('show')
let nomeShow	= document.getElementById('nome-show');


function estados(){
	for (let index = 0; index < states.length; index++) {
	let option = document.createElement('option');
	option.innerText =	states[index].label;
	option.value = states[index].value;
	select.appendChild(option);
	}
}

function verificaDia (event){
	event.preventDefault();
	const diaValue = dia.value;
	const mesValue = mes.value;
	const anoValue = ano.value;
	if (diaValue > 31) {
		alert('Dia maior que 31');
	}
	if (mesValue > 12) {
		alert('Mês maior que 12');
	}
	if (anoValue < 0) {
		alert('Ano menor que 0');
	}
} btnEnviar.addEventListener('click',verificaDia);

function mostraDados(event){
	show.style.display='block';
	nomeShow.innerText += ' Pereira';	
}btnEnviar.addEventListener('click', mostraDados);
estados();
