var persona = [
{
	firstname:'carlos',
	lastname:'hernandez',
	adress:{
		country:{
			name: 'Guatemala',
			code:502,
		},
		city: 'Guatemala',	
	},
	age: 18,
	height: 180,
	},
{
	firstname:'Diego',
	lastname:'Alonzo',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',	
	},
	age: 18,
	height: 164,
	},
{
	firstname:'Mario',
	lastname:'Perdomo',
	adress:{
		country:{
			name:'Guatemala',
			code: 502,
		},
		city:'Guatemala',	
	},
	age:17,
	height:169,
	},
{
	firstname:'Adrian',
	lastname:'Lora',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',
	},
	age:17,
	height:168,
	},
{
	firstname:'Alex',
	lastname:'Briceño',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',	
	},
	age:18,
	height:178,
	},
{
	firstname:'Kenneth',
	lastname:'Hernandez',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',
	},
	age:17,
	height:175,
	},
{
	firstname:'Samuel',
	lastname:'Chávez',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',	
	},
	age:18,
	height:174,
	},
{
	firstname:'Ricardo',
	lastname:'Juarez',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',	
	},
	age:16,
	height:150,
	},
{
	firstname:'Kevinn',
	lastname:'Hernandez',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',
	},
	age:17,
	height:170,
	},
{
	firstname:'Jose',
	lastname:'Gonsalez',
	adress:{
		country:{
			name:'Guatemala',
			code:502,
		},
		city:'Guatemala',
	},
	age:18,
	height:185,
	},
];

for (var i = 0; i < persona.length; i++){
	for (var j = i; j < persona.length -1 -i; j++){
		if (persona[i].firstname < persona[j].firstname) {
			temp = persona[i].firstname ;
			persona[i].firstname = persona[j].firstname ;
			persona[j].firstname = temp ;
		}	
	}
}

console.log(persona[i].firstname);




