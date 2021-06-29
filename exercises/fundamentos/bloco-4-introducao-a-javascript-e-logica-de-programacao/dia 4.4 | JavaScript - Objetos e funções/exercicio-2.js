function verificaPalindrome(string) {
	let reversed = string.split("").reverse().join(""); //split tranforma em array, reverse inverte o array e join transforma em string novamente
		if (reversed === string) {
			
			console.log("true");
		}else{
			console.log("false");
		}

}
	



verificaPalindrome("arara");