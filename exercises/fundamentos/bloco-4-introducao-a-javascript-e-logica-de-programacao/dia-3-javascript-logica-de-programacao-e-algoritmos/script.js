n = 5;
let ast ="";

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


for (let index = 0; index < n; index+=1) {
	for (let id = n; id > 0; id-=1) {
		if (id !== index) {
			ast += " "
		}else{
			ast += "*"
			
		}
		console.log(ast);
	}
	
}








