function isPrime(n){
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
		return true;
	}
}	
console.log(isPrime(13))

var noQuiero = function(n) {
	return false;
}

var isEven = function (n){
	return n % 2 == 0;
}
if (isEven(104)){
	console.log("es par");
}else{
	console.log("no es par");
}
