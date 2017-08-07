var edad = 5;

switch(edad){
	case 0:
		console.log("sos bebe");
		break;
	case 1:
		console.log("sos niño");
		break;
	case 17:
		console.log("casi adulto");
		break;
	case 30:
		console.log("casi viejo");
		break;
	default:
		console.log("no se que poner");	
	
}







var jose = {
	edad: 18,
	altura: 175,
	direccion: {
		departamento: 'Guatemala',
		municipio: 'Ciudad de Guatemala',
		zona: 16,
		residencia: {
			colonia: 'santa amelia',
			apartamento: '100',
			edificio: 5
		}
	}
};

console.log(jose.direccion.municipio);