var saludoFormal = function(nombre){
	return "buenas tardes "+ nombre + "gusto en saludarlo.";
}
var saludoInformal = function(nombre){
	return "que tranzas " + nombre + " ?";
}
var saludar = function(saludo,nombre){
	return saludo(nombre)
}
var persona = "kenneth";

if (persona == "kenneth") {
	console.log(saludar(saludoInformal, persona));
}else{
	console.log(saludar(saludoFormal, persona))
}
