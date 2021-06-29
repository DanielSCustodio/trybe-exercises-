n = 5;
let ast = "";

// for (let index = 0; index < n; index += 1) {
// 		ast += "*";
// }
// for (let index = 0; index < n; index++) {
// 	console.log(ast);

// }

// for (let index = 0; index < n; index+=1) {
// 	ast += "*";
// 	console.log(ast);
// }
let maximo = n;
for (let index = 0; index < n; index += 1) {
	for (let i= 0; i <= n; i+=1) {
		if (i >= maximo) {
				ast +="*";
		} else {
			ast += " ";
		}
	}
	console.log(ast);
	ast = "";
	maximo-=1;
	
}










